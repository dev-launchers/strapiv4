import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import XLSX from 'xlsx';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import pLimit from 'p-limit';

// ---------- CLI ARGS ----------
const argv = yargs(hideBin(process.argv))
  .option('dry', { type: 'boolean', describe: 'Dry run', default: process.env.DRY_RUN === 'true' })
  .help().argv;

// ---------- ENV ----------
const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, '');
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const LOCAL_XLSX_PATH = process.env.LOCAL_XLSX_PATH;
const BATCH_SIZE = Number(process.env.BATCH_SIZE || 10);
const DRY_RUN = argv.dry;

// ---------- FIELD MAPPING (SHEET → STRAPI) ----------
const FIELD_MAPPING = {
  'First Name': 'firstName',
  'Last Name': 'lastName',
  'Personal Email': 'personalEmail',
  'Dev Launchers Email': 'devLaunchersEmail',

  'Role': 'role',
  'Team': 'team',                 // enum
  'Type': 'Types',                // enum

  'DocuSign': 'docuSign',         // enum
  'Discord Join Date (Start Date)': 'discordJoinDate',
  'Onboarding PackageSent': 'onboardingPackageSent',
  'OP Sent Date': 'OPSentDate',
  'Added on Discord': 'addedOnDiscord',
  'Discord': 'discord',
  'Discord Access': 'discordAccess',

  'Added on Github': 'addedOnGithub',
  'Github': 'github',
  'GitHub Access': 'githubAccess',          // enum
  'Added to Google Groups': 'addedToGoogleGroups',
  'Google Suite Access': 'GoogleSuiteAccess',

  '2 Week FUP': 'TwoWeekFup',
  'Fully Onboarded Date': 'FullyOnboardedDate',

  'Status': 'status',                       // enum
  'End Date (should this be moved to the Tenure tab?)': 'EndDate',
  'Duration active (months)': 'DurationActiveMonths',
  'Duration active (years)': 'DurationActiveYears',

  'Reason for leaving?': 'ReasonForLeaving',
  'Fully Offboarded Date': 'FullyOffboardedDate',
  'Note': 'note'
};

// ---------- NORMALIZATION HELPERS ----------
const YES = new Set(['yes', 'y', 'true', '1', 'sent', 'done', 'x']);
const NO  = new Set(['no', 'n', 'false', '0']);

function toBool(v) {
  if (v == null || v === '') return null;
  const s = String(v).trim().toLowerCase();
  if (YES.has(s)) return true;
  if (NO.has(s)) return false;
  return null;
}

function toISODate(v) {
  if (!v) return null;
  const d = new Date(v);
  if (isNaN(d)) return null;
  return d.toISOString();
}

function normalizeEmail(v) {
  return v ? String(v).trim().toLowerCase() : null;
}

const ENUMS = {
  team: {
    'devrecruit': 'devrecruit',
    'dev recruit': 'devrecruit',
    'gpt': 'gpt',
    'ideaspace': 'ideaspace',
    'idea space': 'ideaspace',
    'universaldesign': 'universaldesign',
    'universal design': 'universaldesign',
    'landingpage': 'landingpage',
    'landing page': 'landingpage',
    'userprofile': 'userprofile',
    'user profile': 'userprofile',
    'communitydevelopment': 'communitydevelopment',
    'community development': 'communitydevelopment',
    'platformteam': 'platformteam',
    'platform team': 'platformteam',
    'programmanagement': 'programmanagement',
    'program management': 'programmanagement',
    'all': 'all'
  },
  Types: {
    'member': 'member',
    'leader': 'leader',
    'officer': 'officer'
  },
  status: {
    'active': 'active',
    'inactive': 'inactive'
  },
  docuSign: {
    'signed': 'signed',
    'signed ': 'signed',
    'unsigned': 'unsigned ',
    'unsigned ': 'unsigned ',
    'not signed': 'unsigned ',
    'pending': 'unsigned '
  },
  githubAccess: {
    'member': 'member',
    'maintainer': 'maintainer',
    'none': 'none',
    'no access': 'none'
  }
};

function mapEnum(field, raw) {
  if (raw == null || raw === '') return null;
  const key = String(raw).trim().toLowerCase();
  const map = ENUMS[field];
  if (!map) return raw;
  return map[key] ?? raw;
}

function parseDiscordAccess(v) {
  if (!v) return null;
  const text = String(v);
  const items = text.split(/[\n,]+/)
    .map(s => s.trim())
    .filter(Boolean);
  return items.length ? items : null;
}

// Turn raw record from Excel into a Strapi-ready record
function transformRecord(rec) {
  [
    'firstName', 'lastName', 'preferredName', 'role', 'discord',
    'GoogleSuiteAccess', 'ReasonForLeaving', 'note',
    'DurationActiveMonths', 'DurationActiveYears'
  ].forEach(k => {
    if (rec[k] != null) rec[k] = String(rec[k]).trim();
  });

  rec.personalEmail = normalizeEmail(rec.personalEmail);
  rec.devLaunchersEmail = normalizeEmail(rec.devLaunchersEmail);

  rec.discordJoinDate      = toISODate(rec.discordJoinDate);
  rec.OPSentDate           = toISODate(rec.OPSentDate);
  rec.FullyOnboardedDate   = toISODate(rec.FullyOnboardedDate);
  rec.EndDate              = toISODate(rec.EndDate);
  rec.FullyOffboardedDate  = toISODate(rec.FullyOffboardedDate);

  rec.onboardingPackageSent = toBool(rec.onboardingPackageSent);
  rec.addedOnDiscord        = toBool(rec.addedOnDiscord);
  rec.addedOnGithub         = toBool(rec.addedOnGithub);
  rec.addedToGoogleGroups   = toBool(rec.addedToGoogleGroups);
  rec.TwoWeekFup            = toBool(rec.TwoWeekFup);
  rec.FullyOnboarded        = toBool(rec.FullyOnboarded);

  rec.team          = mapEnum('team', rec.team);
  rec.Types         = mapEnum('Types', rec.Types);
  rec.status        = mapEnum('status', rec.status);
  rec.docuSign      = mapEnum('docuSign', rec.docuSign);
  rec.githubAccess  = mapEnum('githubAccess', rec.githubAccess);

  rec.discordAccess = parseDiscordAccess(rec.discordAccess);

  if (rec.DurationActiveYears) {
    rec.DurationActiveYears = String(rec.DurationActiveYears).trim();
  }
  if (rec.DurationActiveMonths) {
    rec.DurationActiveMonths = String(rec.DurationActiveMonths).trim();
  }

  // auto-publish for draftAndPublish: true
  rec.publishedAt = new Date().toISOString();

  return rec;
}

// ---------- EXCEL PARSING ----------
function parseExcel(filePath) {
  const wb = XLSX.readFile(filePath, { cellDates: true });
  const sheetName = wb.SheetNames[0]; // first tab
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval: null });

  // Build a map of "trimmed header -> actual header" based on the first row’s keys
  const firstRow = rows[0] || {};
  const headerMap = {};
  Object.keys(firstRow).forEach(rawKey => {
    const trimmed = rawKey.trim();
    headerMap[trimmed] = rawKey;
  });

  // For debugging: see what headers we actually have
  console.log('Detected sheet columns:', Object.keys(firstRow));

  const mapped = rows.map(row => {
    const rec = {};

    for (const [excelHeaderTrimmed, strapiField] of Object.entries(FIELD_MAPPING)) {
      const actualHeader = headerMap[excelHeaderTrimmed] || excelHeaderTrimmed;
      rec[strapiField] = row[actualHeader] ?? null;
    }

    return transformRecord(rec);
  });

  return mapped;
}

// ---------- STRAPI CLIENT ----------
const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`
  },
  timeout: 15000
});

async function withRetry(fn, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try { return await fn(); }
    catch (e) {
      lastErr = e;
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
  throw lastErr;
}

async function findMemberByEmail(email) {
  if (!email) return null;
  const res = await api.get('/members', {
    params: {
      'filters[personalEmail][$eq]': email,
      'pagination[pageSize]': 1
    }
  });
  const items = res.data?.data || [];
  return items.length ? items[0] : null;
}

async function createOrUpdateMember(rec) {
  const existing = await findMemberByEmail(rec.personalEmail);
  if (existing) {
    const id = existing.id;
    return api.put(`/members/${id}`, { data: rec });
  } else {
    return api.post('/members', { data: rec });
  }
}

// ---------- MAIN ----------
(async () => {
  if (!STRAPI_URL || !STRAPI_API_TOKEN) throw new Error('Missing STRAPI_URL or STRAPI_API_TOKEN');
  if (!LOCAL_XLSX_PATH) throw new Error('Missing LOCAL_XLSX_PATH in .env');

  const xlsxPath = path.resolve(LOCAL_XLSX_PATH);
  if (!fs.existsSync(xlsxPath)) throw new Error(`LOCAL_XLSX_PATH not found: ${xlsxPath}`);

  console.log('→ Using local Excel file:', xlsxPath);

  console.log('→ Parsing spreadsheet…');
  const records = parseExcel(xlsxPath);
  if (!records.length) {
    console.log('No rows found. Exiting.');
    process.exit(0);
  }

  console.log(`→ Prepared ${records.length} member records.`);
  if (DRY_RUN) {
    console.log('🧪 DRY RUN: showing first 3 mapped records:\n', records.slice(0, 3));
    console.log('No data will be sent to Strapi. Exiting.');
    process.exit(0);
  }

  console.log('→ Importing into Strapi (upsert by personalEmail)…');
  const limit = pLimit(BATCH_SIZE);
  let success = 0, failed = 0;

  await Promise.all(
    records.map((rec, idx) =>
      limit(async () => {
        try {
          await withRetry(() => createOrUpdateMember(rec), 3);
          success++;
          if ((success + failed) % 25 === 0) {
            console.log(`   Progress: ${success + failed}/${records.length}`);
          }
        } catch (e) {
          failed++;
          const msg = e?.response?.data || e.message;
          console.error(`   Row ${idx + 1} failed:`, msg);
        }
      })
    )
  );

  console.log(`→ Done. Success: ${success}, Failed: ${failed}`);
  console.log('✅ Import complete (local file).');
})().catch(err => {
  console.error('❌ Fatal error:', err?.response?.data || err);
  process.exit(1);
});
