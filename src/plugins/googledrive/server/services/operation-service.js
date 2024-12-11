'use strict';
const path = require('path');
const process = require('process');
const { google } = require('googleapis');
const get_service_account_path = () => {
  const service_account_path = path.join(
    process.cwd(),
    'config',
    'env',
    'google_drive_service_account.json'
  );
  return service_account_path;
};
module.exports = ({ strapi }) => ({
  get: async (ctx) => {
    const google_drive_service_account_path = get_service_account_path();
    const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    const auth = new google.auth.GoogleAuth({
      keyFile: google_drive_service_account_path,
      scopes: scopes,
    });
    const drive = google.drive({ version: 'v3', auth });

    if (ctx.request.query.fileId === undefined) {
      const res = await drive.files
        .list({
          pageSize: 1000,
          includeItemsFromAllDrives: true,
          supportsAllDrives: true,
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
          fileId: ctx.request.query.fileId,
          fields: '*',
          supportsAllDrives: true,
        })
        .then((driveResponseList) => driveResponseList.data)
        .catch((err) => err);
      return {
        id: driveResponse.id,
        name: driveResponse.name,
        trashed: driveResponse.trashed,
        modifiedTime: driveResponse.modifiedTime,
        webViewLink: driveResponse.webViewLink,
      };
    }
  },
  upload: async (ctx) => {
    if (!ctx.request.files) {
      return ctx.badRequest('No files were uploaded');
    }

    const google_drive_service_account_path = get_service_account_path();

    const scopes = ['https://www.googleapis.com/auth/drive.file'];

    const auth = new google.auth.GoogleAuth({
      keyFile: google_drive_service_account_path,
      scopes: scopes,
    });
    const drive = google.drive({ version: 'v3', auth });

    const {
      request: { body, files: { files } = {} },
    } = ctx;
    const uploadSingleFile = async (fileName, fileType, filePath) => {
      const fsnp = require('fs');

      const fileMetadata = {
        name: fileName,
        parents: [process.env.FOLDERID],
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

        if (!createResponse.data.parents.includes(process.env.FOLDERID)) {
          throw new Error('File was not created in the expected folder.');
        }
        return createResponse.data;
      } catch (error) {
        ctx.throw(517, error);
        return error;
      }
    };

    try {
      const uploadResponse = await uploadSingleFile(
        files['name'],
        files['type'],
        files.path
      );
      return uploadResponse;
    } catch (err) {
      ctx.throw(533, err);
      return err;
    }
  },
  deleteFile: async (ctx) => {
    const google_drive_service_account_path = get_service_account_path();

    const scopes = ['https://www.googleapis.com/auth/drive.file'];

    const auth = new google.auth.GoogleAuth({
      keyFile: google_drive_service_account_path,
      scopes: scopes,
    });

    const drive = google.drive({ version: 'v3', auth });
    // To send the file to trash
    const body_value = {
      trashed: true,
    };
    try {
      const response = await drive.files.update({
        fileId: ctx.request.query.fileId,
        requestBody: body_value,
        supportsAllDrives: true,
      });
      return response;
    } catch (error) {
      ctx.throw(518, error);
      return error;
    }
  },
});
