const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { google } = require("googleapis");

const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(modelUid, ({ strapi }) => ({
  async listFiles(ctx) {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      "service_account.json"
    );
    //console.log(SERVICE_ACCOUNT_PATH);
    const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
    //https://www.googleapis.com/auth/drive.metadata.readonly
    const GOOGLEACCOUNT = "meenashi.s@devlaunchers.com";
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });

    const service = google.drive({ version: "v3", auth });
    //console.log("after service");
    //console.log(service);

    const FOLDERID = "1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2";

    const res = await service.files.list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });
    const files = res.data.files;
    if (files.length === 0) {
      console.log("No files found.");
      return;
    }

    console.log("Files:");
    files.map(async (file) => {
      console.log(`${file.name} (${file.id}) (${file}) `);
      //      const permissionFiles = await service.permissions.create({
      //        fileId: file.id,
      //        resource: { type: "user", role: "reader", emailAddress: GOOGLEACCOUNT },
      //      });
      //      console.log(permissionFiles);
    });

    ctx.response.status = 200;
    ctx.response.message = "Google Upload Response Success";
  },
}));
