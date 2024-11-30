'use strict';
const path = require('path');
const process = require('process');
const { google } = require('googleapis');
module.exports = ({ strapi }) => ({
  get: async (ctx) => {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      'config',
      'env',
      'service_account.json'
    );
    const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });
    const drive = google.drive({ version: 'v3', auth });

    //    if (ctx.request.query.fileId === undefined) {
    if (
      ctx.request.query.fileId === undefined &&
      ctx.request.query.webViewLink === undefined
    ) {
      const res = await drive.files
        .list({
          pageSize: 1000,
          includeItemsFromAllDrives: true,
          supportsAllDrives: true,
        })
        .then((filesList) => filesList.data)
        .catch((err) => console.log(err));

      if (res?.files?.length === 0) {
        console.log('No files found.');
        return 'No files found';
      }
      return res.files;
    } else if (ctx.request.query.fileId !== undefined) {
      console.log(`fileid is ${ctx.request.query.fileId}`);
      const driveResponse = await drive.files
        .get({
          fileId: ctx.request.query.fileId,
          fields: '*',
          supportsAllDrives: true,
        })
        .then((driveResponseList) => driveResponseList.data)
        .catch((err) => console.log(err));
      console.log(
        driveResponse.id,
        driveResponse.name,
        driveResponse.trashed,
        driveResponse.modifiedTime,
        driveResponse.webViewLink
      );
      return {
        id: driveResponse.id,
        name: driveResponse.name,
        trashed: driveResponse.trashed,
        modifiedTime: driveResponse.modifiedTime,
        webViewLink: driveResponse.webViewLink,
      };
    } else {
      console.log('ctx.request.query.webViewLink');
      console.log(ctx.request.query.webViewLink);
      const res = await drive.files
        .list({
          pageSize: 1000,
          includeItemsFromAllDrives: true,
          supportsAllDrives: true,
          //q: 'name="BigCushion_2.jpg"',
          //q: 'name="' + ctx.request.query.webViewLink + '"',
          q: 'webViewLink="https://drive.google.com/file/d/1Vje2gb7z4tt_24RYBvJElmi6HQ45Rqyi/view?usp=drivesdk"',

          //q: 'webViewLink=https://drive.google.com/file/d/1Vje2gb7z4tt_24RYBvJElmi6HQ45Rqyi/view?usp=drivesdk',
          //"'+ ctx.request.query.webViewLink,
        })
        .then((filesList) => filesList.data)
        .catch((err) => console.log(err));

      if (res?.files?.length === 0) {
        console.log('No files found.');
        return 'No files found';
      }
      return res.files;
    }
  },
  upload: async (ctx) => {
    if (!ctx.request.files) {
      return ctx.badRequest('No files were uploaded');
    }

    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      'config',
      'env',
      'service_account.json'
    );

    //working correct scopes
    const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
    //const SCOPES = ['https://www.googleapis.com/auth/drive'];

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });
    const drive = google.drive({ version: 'v3', auth });

    console.log('process.env.FOLDERID');
    console.log(process.env.FOLDERID);
    const {
      request: { body, files: { files } = {} },
    } = ctx;
    const uploadSingleFile = async (fileName, fileType, filePath) => {
      const fsnp = require('fs');

      const fileMetadata = {
        name: fileName,
        parents: [process.env.FOLDERID], //WORKING
        mimeType: fileType, //mime-types to get the file types
      };
      console.log(fileMetadata);
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
          //if (!createResponse.data.parents.includes(FOLDERID)) {
          throw new Error('File was not created in the expected folder.');
          //console.log('File was not created in the expected folder.');
        }

        //console.log(createResponse);
        return createResponse.data;
      } catch (error) {
        console.log('Resulted in error');
        console.log(error);
        console.log(error.message);
        return error;
      }
    };

    try {
      const uploadResponse = await uploadSingleFile(
        files['name'],
        files['type'],
        files.path
      );
      console.log('uploadResponse');
      //console.log(uploadResponse);
      return uploadResponse;
    } catch (err) {
      ctx.throw(533, err);
      console.log(`error during upload ${err}`);
    }
  },
  deleteFile: async (ctx) => {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      'config',
      'env',
      'service_account.json'
    );

    const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });
    //const service = google.drive({ version: 'v3', auth });

    const drive = google.drive({ version: 'v3', auth });
    console.log('ctx.request.query.fileId');
    console.log(ctx.request.query.fileId);
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
      {
        console.log('Resulted in File Trash error');
        console.log(error.message);
        return error.message;
      }
    }
    //To Trash the file
    /*
    // To permanently delete the file
    // but it didnt work for the content manager permission
    //
    try {
      const response = await drive.files.delete({
        fileId: ctx.request.query.fileId,
        //fileId: ctx.request.query.fileId,
        // supportsAllDrives: true,
      });
      console.log('response in deleteFile');
      console.log(response.status);
      console.log(response.statusText);
      return response;
    } catch (error) {
      {
        console.log('Resulted in error');
        console.log(error.message);
        return error.message;
      }
    } */
  },
});
