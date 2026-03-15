'use strict';
const path = require('path');
const process = require('process');
const { google } = require('googleapis');
// const get_service_account_path = () => {
//   const service_account_path = path.join(
//     process.cwd(),
//     'config',
//     'env',
//     'google_drive_service_account.json'
//   );
//   return service_account_path;
// };
module.exports = ({ strapi }) => ({
  get: async (ctx) => {
    // const google_drive_service_account_path = get_service_account_path();
    
    const serviceAccount = strapi.config.get('plugin.googledrive.providerOptions.serviceAccount');

    const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    const auth = new google.auth.GoogleAuth({
      // keyFile: google_drive_service_account_path,
      credentials: serviceAccount,
      scopes: scopes,
    });
    const drive = google.drive({ version: 'v3', auth });
    if (ctx.request.params.fileId === undefined) {
      const res = await drive.files
        .list({
          pageSize: 1000,
          includeItemsFromAllDrives: true,
          supportsAllDrives: true,
          q: 'trashed = false',
        })
        .then((filesList) => filesList.data)
        .catch((err) => err);

      if (res?.files?.length === 0) {
        return 'No files found';
      }
      return res.files;
    } else {
      const driveResponse = await drive.files
        .get({
          fileId: ctx.request.params.fileId,
          fields: '*',
          supportsAllDrives: true,
        })
        .then((driveResponseList) => driveResponseList.data)
        .catch((err) => {
          return err.errors;
        });
      if (driveResponse.data === undefined) {
        return driveResponse;
      } else {
        return {
          id: driveResponse.id,
          name: driveResponse.name,
          trashed: driveResponse.trashed,
          modifiedTime: driveResponse.modifiedTime,
          webViewLink: driveResponse.webViewLink,
        };
      }
    }
  },
  upload: async (ctx) => {
    const fileInput = ctx.request.files?.files; // correct, showing the strapi terminal
    // console.log('FILES', ctx.request.files);  
    // console.log('BODY', ctx.request.body); // test whether the 'ctx.request.files?.files' is correct
    

    if (!fileInput) {
      return ctx.badRequest('No files were uploaded');
    }
    const file = Array.isArray(fileInput) ? fileInput[0] : fileInput;
    // console.log('file object:', file); // test

    // if (!ctx.request.files) {
    //   return ctx.badRequest('No files were uploaded');
    // }

    // const google_drive_service_account_path = get_service_account_path();
    const serviceAccount = strapi.config.get('plugin.googledrive.providerOptions.serviceAccount');
    const folderId = strapi.config.get('plugin.googledrive.providerOptions.folderId')

    const scopes = ['https://www.googleapis.com/auth/drive.file'];

    const auth = new google.auth.GoogleAuth({
      // keyFile: google_drive_service_account_path,
      credentials: serviceAccount,
      scopes: scopes,
    });
    const drive = google.drive({ version: 'v3', auth });

    // const {
    //   request: { body, files: { files } = {} },
    // } = ctx;
    
    const uploadSingleFile = async (fileName, fileType, filePath) => {
      const fsnp = require('fs');

      const fileMetadata = {
        name: fileName,
        parents: [folderId],
        mimeType: fileType, //mime-types to get the file types
      };
      const media = {
        mimeType: fileType,
        body: fsnp.createReadStream(filePath),
      };
      try {
        const createResponse = await drive.files.create({
          requestBody: fileMetadata,
          media: media,
          supportsAllDrives: true,
          enforceSingleParent: true,
          fields: 'id, name,parents,webViewLink,mimeType',
        });

        if (!createResponse.data.parents.includes(folderId)) {
          throw new Error('File was not created in the expected folder.');
        }
        return createResponse.data;
      } catch (error) {
        console.log(error);
        ctx.throw(500, 'UploadSingleFile failed');
        return 'UploadSingleFile failed';
      }
    };

    try {
      const uploadResponse = await uploadSingleFile(
        file.name,
        file.type,
        file.path
      );
      return uploadResponse;
    } catch (err) {
      console.log(err);
      ctx.throw(500, 'Upload Failed');
      return 'Upload Failed';
    }
  },
  deleteFile: async (ctx) => {
    // const google_drive_service_account_path = get_service_account_path();
    const serviceAccount = strapi.config.get('plugin.googledrive.providerOptions.serviceAccount');
    const scopes = ['https://www.googleapis.com/auth/drive'];

    const auth = new google.auth.GoogleAuth({
      // keyFile: google_drive_service_account_path,
      credentials: serviceAccount,
      scopes: scopes,
    });

    const drive = google.drive({ version: 'v3', auth });
    // To send the file to trash
    // const body_value = {
    //   trashed: true,
    // };
    try {
      const response = await drive.files.delete({ // use permanent delete
        fileId: ctx.request.params.fileId,
        // requestBody: body_value,
        supportsAllDrives: true,
      });
      // return response;
      return { success: true };
    } catch (error) {
      if (error?.response?.status === 404) {
        console.log('File already deleted');
        return { success: true };
      }
      console.log(error);
      ctx.throw(500, 'Delete File Failed');
    }
  },
});
