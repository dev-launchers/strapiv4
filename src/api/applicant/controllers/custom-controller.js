const { request } = require("http");
const fs = require("fs").promises;
const Readable = require("stream");
const crypto = require("crypto");
//const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { authenticate } = require("@google-cloud/local-auth");
const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const path = require("path");
const process = require("process");
const { google } = require("googleapis");

//const ctxBody = require("ctx-body");
//const { parseMultipartData, sanitizeEntity } = require("@strapi/utils");

const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(modelUid, ({ strapi }) => ({
  async googleUploadApplicantPortfolios(ctx) {
    const CLIENT_SECRET_PATH = path.join(process.cwd(), "client_secret.json");
    //    console.log(CLIENT_SECRET_PATH);

    async function getClientSecrets() {
      try {
        const content = await fs.readFile(CLIENT_SECRET_PATH);
        const clientSecrets = JSON.parse(content);
        console.log(clientSecrets);
        //return google.auth.fromJSON(clientSecrets);
        return clientSecrets;
      } catch (err) {
        console.log(`error is ${err}`);
        return err;
      }
    }
    console.log("request received");
    /*
    // const session = require("express-session");
    const TOKEN_PATH = path.join(process.cwd(), "token.json");
    
    async function authorize() {
      //  let client = await loadSavedClientSecretsIfExist();
      //if (client) {
      //  return client;
      //} 
      client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CLIENT_SECRET_PATH,
      });
      console.log(client);
      //if (client.clientSecrets) {
      //  await saveClientSecrets(client);
      //}
      return client;
    }
    async function getTokens() {
      let clientUrl = await authorize();
      console.log("clientUrl below");
      console.log(clientUrl);
      console.log("clientUrl above");
      let clientAuth = getClientSecrets();

      const url = clientAuth.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: SCOPES,
      });
      //const url = await oauth2Client.generateAuthUrl({
      //  access_type: "offline",
      //  scope: SCOPES.join(" "),
      //}); 
      let q = await url.parse(clientUrl, true).query;
      console.log(q);

      //let { tokens } = await oauth2Client.getToken(q.code);
      //console.log(tokens);
      return tokens;
    }

    async function listFiles(authClient) {
      const auth2Client = await authorize();
      const Tokens = await getTokens();
      if (!Tokens) {
        console.log("listFiles");

        const drive = google.drive({ version: "v3", auth: auth2Client });
        const res = await drive.files.list({
          pageSize: 10,
          fields: "nextPageToken, files(id, name)",
        });
        const files = res.data.files;
        if (files.length === 0) {
          console.log("No files found.");
          return;
        }

        console.log("Files:");
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
        ctx.response.status = 200;
        ctx.response.message = "Google Upload Response Success";
      }
    }

    //authorize().
    getTokens().then(listFiles).catch(console.error);
*/
    async function getOAuth2() {
      /**
       * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI.
       * To get these credentials for your application, visit
       * https://console.cloud.google.com/apis/credentials.
       */
      const keys = await getClientSecrets();
      //console.log(keys);
      const oauth2Client = new google.auth.OAuth2(
        keys.web.client_id,
        keys.web.client_secret,
        keys.web.redirect_uris
      );
      console.log("oauth2Client");
      console.log(oauth2Client);
      // Generate a secure random state value.
      const state = crypto.randomBytes(32).toString("hex");
      //console.log(state);
      // Generate a url that asks permissions for the Drive activity scope
      const authorizationUrl = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        //access_type: "offline",
        prompt: "select_account",
        /** Pass in the scopes array defined above.
         * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: SCOPES,
        // Enable incremental authorization. Recommended as a best practice.
        //include_granted_scopes: true,
        // Include the state parameter to reduce the risk of CSRF attacks.
        //state: state,
      });
      authorizationUrl;
      console.log(authorizationUrl);
    }
    await getOAuth2();
    /*    let userClientSecrets = null;

    const client = await getClientSecrets();
    //console.log(client);
    const OAuth2Client = getOAuth2();
    //console.log(OAuth2Client);
    const drive = google.drive({
      version: "v3",
      auth: OAuth2Client,
    });
    const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];

    const {
      request: { body, files: { files } = {} },
    } = ctx;

    //console.log(ctx.request["files"]);

    //console.log(files["name"]);
    //console.log(files["type"]);
    //console.log(ctx.request.files);

    async function uploadFile(inputFile) {
      //async function uploadFile() {
      const fs = require("fs");
      const { GoogleAuth } = require("google-auth-library");

      const account = await strapi.plugins[
        "google-drive"
      ].services.account.findOneAccountUpload();
      console.log(account);
      if (!account) {
        throw new Error("Not found account to upload");
      }
      const drive = strapi.plugins["google-drive"].services.drive.init(account);
      console.log(drive);

      //const auth = new GoogleAuth({
      //  scopes: "https://www.googleapis.com/auth/drive",
      //});

      const authenticateGoogle = async (
        keyFile = path.join(process.cwd(), "clientSecret.json")
      ) => {
        console.log(keyFile);
        const auth1 = new google.auth.GoogleAuth({
          keyFile: keyFile,
          scopes: "https://www.googleapis.com/auth/drive",
        });
        return auth1;
      };
      const auth = await authenticateGoogle();
      console.log(auth);
      console.log("auth");

      const client = await auth.getClient();
      console.log(client);
      const projectId = await auth.getProjectId();
      console.log(projectId);
      const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
      const res = await client.request({ url });
      console.log("DNS Info:");
      console.log(res.data);

      //console.log(inputFile);
      //console.log(inputFile["name"]);
      //console.log(inputFile["type"]);
      //console.log(inputFile["path"]);

      //console.log();inputFile
      //console.log("above ctx.request");
      const fileMetadata = {
        name: inputFile["name"],
        parents: "1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2",
        mimeType: inputFile["type"], //mime-types to get the file types
      };
      //console.log(fileMetadata);

      //const filePath = path.join(inputFile["path"], inputFile["name"]);
      const media = {
        mimeType: inputFile["type"],
        body: fs.createReadStream(files.path),
      };

      //console.log("media");
      //console.log(media);
      console.log("after media");

      const service = google.drive({ version: "v3", auth });
      console.log("after service");
      console.log(service);

      try {
        const response = await service.files.create({
          requestBody: fileMetadata,
          media: media,
          fields: "somefields",
        });
        console.log("here iam");
        console.log(response.data.id);
        return response;
      } catch (error) {
        console.log(error.message);
        return error;
      }
    }
    uploadFile(files);

    ctx.response.status = 200;
    ctx.response.message = "Google Upload Response Success";
*/
  },
}));
