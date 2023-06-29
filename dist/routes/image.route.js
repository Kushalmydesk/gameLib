"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const image_controller_1 = require("../controllers/image.controller");
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
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
});
const router = express_1.default.Router();
router.post("/upload", upload.single("image"), image_controller_1.uploadImage);
exports.default = router;
//# sourceMappingURL=image.route.js.map