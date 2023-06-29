"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload_Img = exports.getFirebaseApp = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
let app;
function getFirebaseApp() {
    if ((0, app_1.getApps)().length === 0) {
        app = (0, app_1.initializeApp)({
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,
        }, 'FireApp');
    }
    else {
        app = (0, app_1.getApp)();
    }
    console.log("fireBase is Initialized");
    return app;
}
exports.getFirebaseApp = getFirebaseApp;
app = getFirebaseApp();
if (!app)
    console.log("No App Initialized");
const storage = (0, storage_1.getStorage)(app);
if (!storage) {
    console.log("Store is not available");
}
//handling the Needed Firebase Associated Function Here 
const upload_Img = async (file, name) => {
    //Creating a storage Reference
    const storageRef = (0, storage_1.ref)(storage, `files/${name}_${Date.now()}`);
    const metadata = {
        contentType: file.mimetype,
    };
    //Uploading the file to Firebase Storage
    const snapshot = await (0, storage_1.uploadBytes)(storageRef, file.buffer, metadata);
    //grab the public url
    const downloadUrl = await (0, storage_1.getDownloadURL)(snapshot.ref);
    return downloadUrl;
};
exports.upload_Img = upload_Img;
//# sourceMappingURL=firebase.service.js.map