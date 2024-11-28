'use strict';
const path = require('path');
const process = require('process');
const { google } = require('googleapis');
//const validateUploadBody = require("../validation/upload");
module.exports = ({ strapi }) => ({
  // async function getAll() {
  getall: async () => {
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      'config',
      'env',
      'service_account.json'
    );
    const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    //const GOOGLEACCOUNT = "meenashi.s@devlaunchers.com";
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });
    //const service = google.drive({ version: 'v3', auth });
    const drive = google.drive({ version: 'v3', auth });

    const FOLDERID = '1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2';

    /*    const permissions = await drive.permissions.list({
      fileId: FOLDERID,
      fields: 'permissions(role, emailAddress)',
      supportsAllDrives: true,
    });

    console.log('Permissions:', permissions.data.permissions);
    return permissions.data.permissions;
  
    const driveResponse = await drive.files.get({
      fileId: FOLDERID,
      fields: 'id, name, driveId',
      supportsAllDrives: true,
    });

    //   .then((driveResponseList) => driveResponseList.data)
    //   .catch((err) => console.log(err));
    // console.log(driveResponse);
    if (!driveResponse.data || driveResponse.data.id !== FOLDERID) {
      throw new Error('The folder ID is invalid or inaccessible.');
    }
    return driveResponse.data;
    //const files = res.data.files;
    //if (driveResponse?.files?.length === 0) {
    //  console.log('No driveResponse found.');
    //  return 'No driveResponse found';
    //}
    return driveResponse.data;

    /*
    const res = await service.files.list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });*/
    const res = await drive.files
      .list({
        // fileId: '1aqhRsJpO22oriAVYlRX-YdtqsQx7ZGBq',
        pageSize: 1000,
        //fields: 'nextPageToken, files(id, name)',
        //fields: '*', //: 'trashed, explicitlyTrashed,trashedTime,trashingUser',
        //q: '"1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2" in parents',
        includeItemsFromAllDrives: true,
        //driveId: FOLDERID,
        //corpora: 'drive',
        supportsAllDrives: true,
      })
      .then((filesList) => filesList.data)
      .catch((err) => console.log(err));

    //const files = res.data.files;
    if (res?.files?.length === 0) {
      console.log('No files found.');
      return 'No files found';
    }
    return res.files;
    /*
    const res1 = await drive.permissions
      .list({
        fileId: '1EhOoIBFEZ-tFZFbpHKgJRGyQC0E0Loyk',
        fields: 'permissions',
        //includeItemsFromAllDrives: true,
        //supportsAllDrives: true,
        //driveId: FOLDERID,
      })
      .then((permissionList) => permissionList.data)
      .catch((err) => console.log(err));

    //const files = res.data.files;
    if (res1?.permissions?.length === 0) {
      console.log('No permissions found.');
      return 'No persmissions found';
    }
    return res1.permissions;
*/
    //return files;
  },
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
  },
  upload: async (ctx) => {
    console.log('upload at line 55');

    //    console.log(typeof ctx.request.files);
    //    console.log('Body:', ctx.request.body);
    //console.log(ctx.request.files);
    //console.log(ctx.request.files[0]);
    if (!ctx.request.files) {
      return ctx.badRequest('No files were uploaded');
    }

    //if (Array.isArray(ctx.request.files.files)) {
    //if (Array.isArray(ctx.request.files)) {
    //console.log('Number of files:', ctx.request.files.files.length);
    //} else {
    //  console.log('ctx.request.files.files is not an array or is undefined.');
    //}

    //ctx.request.files.forEach((file, index) => {
    //ctx.request.files.files.forEach((file, index) => {
    //console.log(`File at index ${index}:`, file);
    //});

    /*console.log(ctx.request["files"]);
    console.log(ctx.request.files[0]);
    console.log(ctx.request["files"][0]);

    console.log(ctx.request.files[0]["File"]);
    console.log(ctx.request.files);
 */
    //console.log('control here');
    //console.log(ctx.request.files.files[0]);
    const SERVICE_ACCOUNT_PATH = path.join(
      process.cwd(),
      'config',
      'env',
      'service_account.json'
    );

    //console.log(SERVICE_ACCOUNT_PATH);
    //working correct scopes
    //const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
    const SCOPES = ['https://www.googleapis.com/auth/drive'];

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: SCOPES,
    });
    const drive = google.drive({ version: 'v3', auth });

    //const service = google.drive({ version: 'v3', auth });
    //console.log('after service');
    //console.log(drive);

    const FOLDERID = '1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2';
    const {
      request: { body, files: { files } = {} },
    } = ctx;
    //console.log(files);
    //const data = await validateUploadBody(ctx.request.body);

    //console.log(data);
    //console.log(files.name);
    //console.log(files.type);
    //console.log(files.path);
    const uploadSingleFile = async (fileName, fileType, filePath) => {
      const fsnp = require('fs');

      const fileMetadata = {
        name: fileName,
        parents: [FOLDERID], //SUBFOLDERID
        mimeType: fileType, //mime-types to get the file types
      };

      //console.log(fileMetadata);
      const media = {
        mimeType: fileType,
        body: fsnp.createReadStream(filePath),
      };
      //console.log(`media is ${media}`);
      try {
        const createResponse = await drive.files.create({
          // resource: {
          //   name: fileName,
          //   parents: DRIVEID, //[FOLDERID],
          // },
          requestBody: fileMetadata,
          media: media,
          supportsAllDrives: true,
          enforceSingleParent: true,
          fields: 'id, name,parents,shared,webViewLink',
          //ignoreDefaultVisibility: true,
          //  drive: DRIVEID, //newly added line
        });
        console.log('after create');
        console.log(`response.data.id is ${createResponse.data.id}`);
        console.log(
          `response.webViewLink is ${createResponse.data.webViewLink}`
        );

        //console.log(createResponse);

        if (!createResponse.data.parents.includes(FOLDERID)) {
          throw new Error('File was not created in the expected folder.');
          //console.log('File was not created in the expected folder.');
        }
        //return createResponse;

        //ctx.response.status = 200;
        //ctx.response.message =
        //  response.data.id + " I Google Upload Response Success";
        console.log('before permissions');
        console.log(!createResponse.data.id);
        console.log(!!createResponse.data.id);

        if (!!createResponse.data.id)
          try {
            const permissionFiles = await drive.permissions.create({
              fileId: createResponse.data.id,
              requestBody: {
                type: 'anyone',
                role: 'reader',
              },
              supportsAllDrives: true,
            });
            console.log(permissionFiles);
            console.log('Permissions updated successfully');
          } catch (err) {
            console.log(err);
          }
        //console.log(createResponse);
        return createResponse;
      } catch (error) {
        console.log('Resulted in error');
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

    // return new Promise(async (resolve, reject) => {
    //console.log("inside upload(file) below");
    //console.log(file);
    //console.log("inside upload(file) above");
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
    console.log(ctx.request.query);
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
        console.log('Resulted in File Thrash error');
        console.log(error.message);
        return error.message;
      }
    }
    //To Trash the file   */
    /*
    // To permanently delete the file
    // but it didnt work for the content manager permission
    try {
      const response = await drive.files.delete({
        fileId: ctx.request.query.fileId,
        supportsAllDrives: true,
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
