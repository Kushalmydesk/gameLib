import { Request, Response } from "express";
import { upload_Img } from "../services/firebase.service";

import Image, { IImage } from "../models/image.model";
import Game, { IGame } from "../models/game.model";

export const uploadImage = async (req: Request, res: Response) => {

  try {
    if (!req.file) {
      return res.status(400).send({ message: "File not found" });
    }

    const file = req.file;
    const { name, gameId } = req.body;

    const imageUrl = await upload_Img(file, name);

    console.log(req.body);

    const image = new Image({
      name,
      imageUrl,
      gameId,
    });

    await image.save();

    //Finding the game document by Id and updating its image field
    await Game.findByIdAndUpdate(gameId, { $set: { image: image._id } });

    res.status(201).send({
      success: true,
      message: "Image uploaded successfully",
      imageUrl: imageUrl,
      name: file.originalname,
      type: file.mimetype,
    });
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json({ success: false, message: "Failed to upload image" });
  }
};
