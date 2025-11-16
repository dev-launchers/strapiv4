# Member Import Utility

This folder contains standalone scripts for importing member data into the Strapi `members` collection.  
It supports importing data from:

- **Local Excel (.xlsx) files**
- **Google Drive spreadsheet files** (via a Google Service Account)

These scripts handle:
- Data mapping from spreadsheet → Strapi fields  
- Normalization (dates, booleans, enums, email formatting)  
- Upsert logic (update if the member exists, otherwise create)  
- Dry-run support  
- Optional Google Drive link removal or file deletion  

---

## 📁 Scripts Included

---

### **1. `import-members-local.mjs`**

Imports members from a **local Excel (.xlsx)** file defined in your `.env`.

#### 🛠 Setup

In your `.env`:

```env
STRAPI_URL="http://localhost:1337"
STRAPI_API_TOKEN="<your-token>"

LOCAL_XLSX_PATH="C:/path/to/members.xlsx" ```

BATCH_SIZE=10
DRY_RUN=false

#### 🛠 To Run Locally for downloaded Excel file

```
node import-members-local.mjs --dry

node import-members-local.mjs

```

#### 🛠 To Run for Googlesheets on google drive

```
node import-members-drive.mjs --dry

node import-members-drive.mjs

```
