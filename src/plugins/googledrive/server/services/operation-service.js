'use strict';
const { google } = require('googleapis');
module.exports = ({ strapi }) => ({
  get: async (ctx) => {
    const serviceAccount = strapi.config.get('plugin.googledrive.providerOptions.serviceAccount');
    const folderId = strapi.config.get('plugin.googledrive.providerOptions.folderId');
    if (!serviceAccount) {
      ctx.throw(500, 'Google Drive plugin is not configured: serviceAccount is missing');
      return;
    }
    if (!folderId) {
      ctx.throw(500, 'Google Drive plugin is not configured: folderId is missing');
      return;
    }
    const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    const auth = new google.auth.GoogleAuth({
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
    const fileInput = ctx.request.files?.files;
    if (!fileInput) {
      return ctx.badRequest('No files were uploaded');
    }
    const file = Array.isArray(fileInput) ? fileInput[0] : fileInput;
    const serviceAccount = strapi.config.get('plugin.googledrive.providerOptions.serviceAccount');
    const folderId = strapi.config.get('plugin.googledrive.providerOptions.folderId')
    const scopes = ['https://www.googleapis.com/auth/drive.file'];

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: scopes,
    });
    const drive = google.drive({ version: 'v3', auth });
    
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
    const serviceAccount = strapi.config.get('plugin.googledrive.providerOptions.serviceAccount');
    const scopes = ['https://www.googleapis.com/auth/drive'];

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: scopes,
    });

    const drive = google.drive({ version: 'v3', auth });
    // Use permanent delete instead of moving the file to trash.
    // Moving to trash requires 'Manager' permission for service account in Google Drive
    try {
      await drive.files.delete({
        fileId: ctx.request.params.fileId,
        supportsAllDrives: true,
      });
      return { success: true };
    } catch (error) {
      const status = error?.response?.status || error?.code;

      if (status === 404) {
        console.log('File already deleted');
        return { success: true };
      }
      if (status === 401) {
        console.log('Unauthoried: service account cannot access the file');
        return ctx.unauthorized('Service account does not have access to this file');
      }
      console.log(error);
      ctx.throw(500, 'Delete File Failed');
    }
  },
});
