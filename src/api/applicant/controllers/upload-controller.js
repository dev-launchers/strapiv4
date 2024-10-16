//const fs = require("fs").promises;

const path = require("path");
const process = require("process");
const { google } = require("googleapis");

const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(modelUid, ({ strapi }) => ({
  async googleDriveUploadPortfolios(ctx) {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      "service_account.json"
    );
    console.log(SERVICE_ACCOUNT_PATH);
    const SCOPES = ["https://www.googleapis.com/auth/drive.file"];
    const GOOGLEACCOUNT = "meenashi.s@devlaunchers.com";

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });

    const service = google.drive({ version: "v3", auth });
    console.log("after service");
    console.log(service);

    const FOLDERID = "1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2";

    const {
      request: { body, files: { files } = {} },
    } = ctx;
    console.log(files.name);
    console.log(files.type);
    console.log(files.path);
    const uploadSingleFile = async (fileName, fileType, filePath) => {
      const fsnp = require("fs");

      const fileMetadata = {
        name: fileName,
        parents: FOLDERID,
        mimeType: fileType, //mime-types to get the file types
      };

      console.log(fileMetadata);
      const media = {
        mimeType: fileType,
        body: fsnp.createReadStream(filePath),
      };
      console.log(media);
      try {
        const response = await service.files.create({
          resource: {
            name: fileName,
            parents: [FOLDERID],
          },
          requestBody: fileMetadata,
          media: media,
        });
        console.log("response below");
        console.log(response);
        console.log("response above");

        console.log("here iam");
        console.log(response.data.id);
        ctx.response.status = 200;
        ctx.response.message =
          response.data.id + " I Google Upload Response Success";

        const permissionFiles = async () =>
          await service.permissions.create({
            fileId: response.data.id,
            resource: {
              type: "user",
              role: "reader",
              emailAddress: GOOGLEACCOUNT,
            },
          });
        console.log(permissionFiles);

        ctx.response.status = 200;
        ctx.response.message =
          response.data.id + " Per Google Upload Response Success";

        return response;
      } catch (error) {
        console.log(error.message);
        return error;
      }
    };
    //return
    try {
      const uploadResponse = await uploadSingleFile(
        files["name"],
        files["type"],
        files.path
      );
      console.log(uploadResponse);
    } catch (err) {
      console.log(`error in upload ${err}`);
    }
  },
}));
