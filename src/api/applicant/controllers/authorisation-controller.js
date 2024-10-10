const { request } = require("http");
const fs = require("fs").promises;
const Readable = require("stream");
const URL = require("url");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const { authenticate } = require("@google-cloud/local-auth");
const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const path = require("path");
const process = require("process");
const { google } = require("googleapis");
//Global object
var auths = {};

//...

const { createCoreController } = require("@strapi/strapi").factories;
const modelUid = "api::applicant.applicant";
module.exports = createCoreController(modelUid, ({ strapi }) => ({
  async getAuthorisation(ctx) {
    const CLIENT_SECRET_PATH = path.join(process.cwd(), "client_secret.json");
    //    console.log(CLIENT_SECRET_PATH);
    let clientUrl = "";
    console.log("request received");
    async function getClientSecrets() {
      try {
        const content = await fs.readFile(CLIENT_SECRET_PATH);
        const clientSecrets = JSON.parse(content);
        console.log(clientSecrets);
        return google.auth.fromJSON(clientSecrets);
        //return clientSecrets;
      } catch (err) {
        console.log(`error is ${err}`);
        return err;
      }
    }
    /*
    // const session = require("express-session");
    const TOKEN_PATH = path.join(process.cwd(), "token.json");
    */
    async function serverSideExample() {
      console.log("serverSideExample");
      const content = await fs.readFile(CLIENT_SECRET_PATH);
      const clientSecrets = await JSON.parse(content);
      console.log(clientSecrets);
      console.log("above clientSecrets");
      //const keys = getClientSecrets();
      console.log(`client_id ${clientSecrets.web.client_id}`);
      console.log(`client_secret ${clientSecrets.web.client_secret}`);
      console.log(`redirect ${clientSecrets.web.redirect_uris}`);

      const oauth2Client = new google.auth.OAuth2(
        clientSecrets.web.client_id,
        clientSecrets.web.client_secret,
        clientSecrets.web.redirect_uris
      );
      console.log(oauth2Client);

      // Generate a secure random state value.
      const state = crypto.randomBytes(32).toString("hex");

      // Store state in the session
      ctx.state = state;

      // Generate a url that asks permissions for the Drive activity scope
      const authorizationUrl = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: "offline",
        /** Pass in the scopes array defined above.
         * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: SCOPES,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true,
        // Include the state parameter to reduce the risk of CSRF attacks.
        state: state,
      });
      console.log(authorizationUrl);
      console.log("authorizationUrl");
      await ctx.response.redirect(authorizationUrl);
      console.log(ctx.response.redirect(authorizationUrl));
      console.log("responseUrl");

      let q = URL.parse(ctx.response.redirect(authorizationUrl), true).query;
      console.log("q");
      console.log(q);

      let { tokens } = await oauth2Client.getToken(q.code);
      console.log(tokens);
      oauth2Client.setCredentials(tokens);
    }
    async function authorize() {
      console.log("inside authorize");

      //  let client = await loadSavedCredentialsIfExist();
      //if (client) {
      //  return client;
      //}
      client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CLIENT_SECRET_PATH,
      });
      console.log(client);
      //Save Client
      //auths[req.session.id] = client;

      //if (client.credentials) {
      //  await saveCredentials(client);
      //}
      clientUrl = client;
      return client;
    }
    async function getTokens(inputClient) {
      //let clientUrl = await authorize();
      //console.log("clientUrl below");
      //console.log(clientUrl);
      //Save Client
      //auths[req.session.id] = clientUrl;

      //console.log("clientUrl above");
      //let clientAuth = getCredentials();

      //const url = inputClient.generateAuthUrl({
      //  access_type: "offline",
      //  prompt: "consent",
      //  scope: SCOPES,
      //});

      //const url = await oauth2Client.generateAuthUrl({
      const url = await inputClient.generateAuthUrl({
        access_type: "offline",
        //scope: SCOPES.join(" "),
        scope: SCOPES,
      });
      console.log("url");
      console.log(url);
      let q = URL.parse(url, true).query;
      console.log("q");
      console.log(q);
      let { tokens } = await inputClient.getToken(q.code);
      console.log(tokens);

      //let { tokens } = await oauth2Client.getToken(q.code);
      //console.log(tokens);
      return tokens;
    }
    //working one except generateURL
    //authorize()
    //  .then((inputCli) => getTokens(inputCli))
    //  .catch(console.error);
    //
    //authorize().then(getTokens()).catch(console.error);
    //let clientUrl = await authorize().then(getTokens()).catch(console.error);
    serverSideExample();
    ctx.response.status = 200;
    ctx.response.message = "Google Upload Response Success";
  },
}));
