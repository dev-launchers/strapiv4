"use strict";
const path = require("path");
const process = require("process");
const { google } = require("googleapis");
//const validateUploadBody = require("../validation/upload");
module.exports = ({ strapi }) => ({
  getSecondWelcomeMessage() {
    return "Welcome to Second Strapi 🚀";
  },
  // async function getAll() {
  getall: async () => {
    console.log("inside getall");
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      "config",
      "env",
      "service_account.json"
    );
    const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
    //const GOOGLEACCOUNT = "meenashi.s@devlaunchers.com";
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });
    const service = google.drive({ version: "v3", auth });

    const FOLDERID = "1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2";
    /*
    const res = await service.files.list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });*/
    const res = await service.files
      .list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name)",
        //includeItemsFromAllDrives: true,
        //driveId: FOLDERID,
      })
      .then((filesList) => filesList.data)
      .catch((err) => console.log(err));

    //const files = res.data.files;
    console.log(res?.files);
    console.log("above");
    if (res?.files?.length === 0) {
      console.log("No files found.");
      return "No files found";
    }
    return res.files;

    //return files;
  },
  upload: async (ctx) => {
    console.log("upload at line 55");
    console.log(ctx.request.files);
    if (Array.isArray(ctx.request.files.files)) {
      console.log("Number of files:", ctx.request.files.files.length);
    } else {
      console.log("ctx.request.files is not an array or is undefined.");
    }

    ctx.request.files.files.forEach((file, index) => {
      console.log(`File at index ${index}:`, file);
    });

    /*console.log(ctx.request["files"]);
    console.log(ctx.request.files[0]);
    console.log(ctx.request["files"][0]);

    console.log(ctx.request.files[0]["File"]);
    console.log(ctx.request.files);
 */
    console.log("control here");
    console.log(ctx.request.files.files[0]);
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      "config",
      "env",
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
    //console.log("after service");
    //console.log(service);

    const FOLDERID = "1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2";

    const {
      request: { body, files: { files } = {} },
    } = ctx;

    //const data = await validateUploadBody(ctx.request.body);

    //console.log(data);
    //console.log(files.name);
    //console.log(files.type);
    //console.log(files.path);
    const uploadSingleFile = async (fileName, fileType, filePath) => {
      const fsnp = require("fs");

      const fileMetadata = {
        name: fileName,
        parents: FOLDERID,
        mimeType: fileType, //mime-types to get the file types
      };

      //console.log(fileMetadata);
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
        console.log(response.data.id);
        //ctx.response.status = 200;
        //ctx.response.message =
        //  response.data.id + " I Google Upload Response Success";

        const permissionFiles = async () =>
          await service.permissions.create({
            fileId: response.data.id,
            resource: {
              type: "user",
              role: "reader",
              emailAddress: GOOGLEACCOUNT,
            },
          });
        //console.log(permissionFiles);

        //ctx.response.status = 200;
        //ctx.response.message =
        //  response.data.id + " Per Google Upload Response Success";

        return response;
      } catch (error) {
        console.log(error.message);
        return error;
      }
    };
    //return
    try {
      ctx.request.files.files.forEach(async (file, index) => {
        console.log(`File at index ${index}:`, file);
        const uploadResponse = await uploadSingleFile(
          file["name"],
          file["type"],
          file.path
        );
        return uploadResponse;
      });
      return "Files loaded successfully";
    } catch (err) {
      ctx.throw(533, err);
      console.log(`error during upload ${err}`);
    }

    /*      const uploadResponse = await uploadSingleFile(
        files["name"],
        files["type"],
        files.path
      ); 
      //console.log(uploadResponse);
      return uploadResponse;
    } catch (err) {
      ctx.throw(533, err);
      console.log(`error during upload ${err}`);
    }
*/
    // return new Promise(async (resolve, reject) => {
    //console.log("inside upload(file) below");
    //console.log(file);
    //console.log("inside upload(file) above");
  },
  deleteFile: async (ctx) => {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      "config",
      "env",
      "service_account.json"
    );

    console.log(SERVICE_ACCOUNT_PATH);
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
});
