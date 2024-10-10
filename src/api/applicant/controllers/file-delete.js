const process = require("process");
const path = require("path");

const { google } = require("googleapis");

const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(modelUid, ({ strapi }) => ({
  async deleteFile(ctx) {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      "service_account.json"
    );
    //console.log(SERVICE_ACCOUNT_PATH);
    const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });

    const service = google.drive({ version: "v3", auth });
    console.log(ctx.request.query);
    const response = await service.files.delete({
      fileId: ctx.request.query.fileId,
    });
    return response;
  },
}));
