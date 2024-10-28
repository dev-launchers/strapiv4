# Strapi plugin googledrive

Strapi Custom Plugin: File Management
A Strapi custom plugin that provides features for managing files, including uploading a single file, deleting a file, fetching a list of files, and retrieving a specific file by its ID.

Features
Upload a Single File: Upload a file to the storage system.
Delete a File: Remove a file by its ID.
Get Files List: Retrieve a list of all files.
Get a File by ID: Fetch a specific file's details using its ID.
Installation
Clone this repository into your Strapi project's plugins folder:

cd your-strapi-project/plugins
git clone <repository-url> file-management
Navigate to your Strapi project root and build the plugin:

npm run build
Restart the Strapi server:

npm run develop

Usage

Endpoints

This plugin exposes the following API endpoints:

1. Upload a File
   URL: /api/googledrive/
   Method: POST
   Headers: Content-Type: multipart/form-data
   Body: A file to upload.
   Response:
   {
   "id": "1AjOxIxnpI9-33u72CXxwItufdpcMohAf",
   "name": "174-HRC-270224_Health Records Clerk job description.pdf",
   "mimeType": "application/pdf",
   "parents": [
   "1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2"
   ],
   "webViewLink": "https://drive.google.com/file/d/1AjOxIxnpI9-33u72CXxwItufdpcMohAf/view?usp=drivesdk"
   }
2. Delete a File
   URL: /api/googledrive/13VzC62JBdE4Hklvdy_bSLE7ozRIeJ9xe

   Method: DELETE
   Params: fileId - The ID of the file to delete.
   Response:
   200 if the fileid is present and deleted successfully
   If the fileId is not present then the following error message:
   {
   "data": null,
   "error": {
   "status": 500,
   "name": "InternalServerError",
   "message": "Failed to delete the file"
   }
   }

3. Get Files List
   URL: /api/googledrive/
   Method: GET
   Response:

   [
   {
   "kind": "drive#file",
   "driveId": "0AIDj3zF5rdwgUk9PVA",
   "mimeType": "image/jpeg",
   "id": "11IB2SdktXYCjk3mWmkgoj88HiWKcIDVY",
   "name": "BigCushion_2.jpg",
   "teamDriveId": "0AIDj3zF5rdwgUk9PVA"
   }
   ]

4. Get a File by ID
   URL: /api/googledrive/1Vje2gb7z4tt_24RYBvJElmi6HQ45Rqyi
   Method: GET
   Params: id - The ID of the file to fetch.
   Response:
   If the fileId is present:
   {
   "id": "1Vje2gb7z4tt_24RYBvJElmi6HQ45Rqyi",
   "name": "BigCushion_2.jpg",
   "trashed": true,
   "modifiedTime": "2024-11-29T16:37:49.174Z",
   "webViewLink": "https://drive.google.com/file/d/1Vje2gb7z4tt_24RYBvJElmi6HQ45Rqyi/view?usp=drivesdk"
   }
   if the fileId is not present:
   [
   {
   "message": "File not found: 1jI1CvETZeGPIUALnJLvwTE_6bwVkgwtg*.",
   "domain": "global",
   "reason": "notFound",
   "location": "fileId",
   "locationType": "parameter"
   }
   ]

   Configuration
   This plugin uses Strapi's default file upload provider. To customize the file storage (e.g., AWS S3, Cloudinary, etc.), configure the Upload Plugin settings in your config/plugins.js file.

Edit ./config/plugins.js
/\*
googledrive: {
enabled: true,
resolve: './src/plugins/googledrive',
},
upload: {
config: {
provider: 'googledrive',
providerOptions: {
publicFiles: true,
uniform: false,
serviceAccount: env.json('GOOGLE_DRIVE_SERVICE_ACCOUNT'),
},
},

},
\*/

Development
Project Structure
plaintext
Copy code
plugins/file-management/
├── admin/ # Admin panel configuration
├── server/ # Backend functionality
│ ├── controllers/ # API controllers
│ ├── routes/ # Routes for the API
│ ├── services/ # Business logic and service layer
│ └── models/ # Data models (if applicable)
├── strapi-admin.js # Plugin admin entry point
├── strapi-server.js # Plugin server entry point
└── README.md # Documentation
Running the Plugin in Development
To test your changes during development, use:

npm run develop
License
This plugin is licensed under the MIT License.

Contribution
We welcome contributions! Please submit issues or pull requests via GitHub.

===
To Create Service Account in Google Cloud console

Go to the Google Cloud Console:
Visit Google Cloud Console.

Select Your Project:
In the top navigation bar, click the Project Selector dropdown and select the project where you want to create the service account.

Navigate to the Service Accounts Page:

Open the navigation menu (☰).
Go to IAM & Admin > Service Accounts.
Create a New Service Account:

Click + CREATE SERVICE ACCOUNT.
Fill in the required details:
Service Account Name: A descriptive name for your service account.
Service Account ID: Automatically generated based on the name.
Click CREATE AND CONTINUE.
Assign Permissions:

Add roles to specify the permissions the service account needs.
Currently the service account has the role 'Owner'
For example, select Storage Admin for managing Cloud Storage.
Click CONTINUE.
Optional: Grant Users Access to the Service Account:
Add users or groups who can manage the service account. Click DONE.

Generate a Key (if needed):

Find the created service account in the list.
Click the Actions menu (⋮) next to it and select Manage Keys.
Click ADD KEY > Create New Key.
Select JSON and click CREATE.
A JSON file will be downloaded; keep this file secure—it contains the credentials for the service account.

---

Enable an API
To enable an API for your project:

Go to the API Console.
From the projects list, select a project or create a new one.
If the APIs & services page isn't already open, open the console left side menu and select APIs & services, and then select Library.
Click the API "Google Drive API".

Click ENABLE.

##

Shared google drive should have access to the generated Service Account's Email address.

---

Edit ./config/middlewares.js
/\*
{
name: "strapi::body",
config: {
enabled: true,
multipart: true, // Enable multipart parsing for file uploads
formidable: {
maxFileSize: 200 _ 1024 _ 1024, // Optional: Increase file size limit (e.g., 200MB)
},
},
},
\*/

Update .env to include the shared FOLDERID
FOLDERID='1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2'
=======
