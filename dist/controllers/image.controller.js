"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const firebase_service_1 = require("../services/firebase.service");
const image_model_1 = __importDefault(require("../models/image.model"));
const game_model_1 = __importDefault(require("../models/game.model"));
const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: "File not found" });
        }
        const file = req.file;
        const { name, gameId } = req.body;
        const imageUrl = await (0, firebase_service_1.upload_Img)(file, name);
        console.log(req.body);
        const image = new image_model_1.default({
            name,
            imageUrl,
            gameId,
        });
        await image.save();
        //Finding the game document by Id and updating its image field
        await game_model_1.default.findByIdAndUpdate(gameId, { $set: { image: image._id } });
        res.status(201).send({
            success: true,
            message: "Image uploaded successfully",
            imageUrl: imageUrl,
            name: file.originalname,
            type: file.mimetype,
        });
    }
    catch (error) {
        console.error("ERROR", error);
        res.status(500).json({ success: false, message: "Failed to upload image" });
    }
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=image.controller.js.map