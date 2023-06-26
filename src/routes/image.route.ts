import express, { Router } from "express";
import multer from "multer";
import { uploadImage } from "../controllers/image.controller";

/*
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const originalExtension = file.originalname.split('.').pop();
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}.${originalExtension}`);
  },
});

const fileFilter = (req: express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Customize the file filter logic if needed
  // Example: Accept only JPEG and PNG files
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PNG files are allowed'));
  }
};

const upload = multer({ storage, fileFilter });*/

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});

const router: Router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);

export default router;
