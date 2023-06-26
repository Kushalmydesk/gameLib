import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import {
  getStorage,
  FirebaseStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  UploadResult,
} from "firebase/storage";
import * as dotenv from "dotenv";

dotenv.config();

let app: FirebaseApp;

export function getFirebaseApp(): FirebaseApp {
  if (getApps().length === 0) {
    app = initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    }, 'FireApp');
  } else {
    app = getApp();
  }

  console.log("fireBase is Initialized");
  return app;
}

  app = getFirebaseApp();
  if(!app) console.log("No App Initialized");


const storage: FirebaseStorage = getStorage(app);
if(!storage){
  console.log("Store is not available")
}


//handling the Needed Firebase Associated Function Here 
export const upload_Img = async (file: Express.Multer.File, name: string) => {
  //Creating a storage Reference
  const storageRef = ref(storage, `files/${name}_${Date.now()}`);

  const metadata = {
    contentType: file.mimetype,
  };

  //Uploading the file to Firebase Storage
  const snapshot: UploadResult = await uploadBytes(
    storageRef,
    file.buffer,
    metadata
  );

  //grab the public url
  const downloadUrl: string = await getDownloadURL(snapshot.ref);
  return downloadUrl;
};
