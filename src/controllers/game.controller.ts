import { Request, Response, NextFunction } from "express";
import Game, { IGame } from "../models/game.model";
import Series from "../models/series.model";
import { upload_Img } from "../services/firebase.service";

//This is the function for getting games
export const getGames = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const games: IGame[] = await Game.find({}).exec();
    res.status(200).send(games);
  } catch (err) {
    console.log("Error getting games", err.message);
  }
};

export const getGamesById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gameId = req.params.id;

    const game: IGame = await Game.findById(gameId).exec();
    res.status(200).send({
      game,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message, error: "Internal Server Error" });
  }
};

//This is the function for creating games
export const createGame = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const {
      title,
      genre,
      platform,
      releaseYear,
      developer,
      publisher,
      description,
      rating,
      tags,
      languages,
      multiplayer,
      platforms,
      seriesName,
    } = req.body;

    //Checkin if any File is given or not
    if (!req.file) {
      return res.status(400).send({ message: "File not found" });
    }

    const file = req.file;
    const imageUrl = await upload_Img(file, title); // getting the downloadable imageUrl from Firebase

    //Retriving the seriesId from provided SeriesName
    const seriesId = await Series.findOne({ title: seriesName }, { _id: 1 });
    if (!seriesId) {
      return res.status(400).send({ message: "Series not found" });
    }

    //Converting to Array
    const tagsString = tags;
    const tagArray = tagsString.split(",").map((tag: string) => tag.trim());

    const langString = languages;
    const langArray = langString.split(",").map((lang: string) => lang.trim());

    const platformString = platforms;
    const platformArray = platformString
      .split(",")
      .map((plat: string) => plat.trim());

    const newGame = new Game({
      title,
      genre,
      platform,
      releaseYear,
      developer,
      publisher,
      description,
      rating,
      tagArray,
      langArray,
      multiplayer,
      platformArray,
      seriesId,
      imageUrl,
    });

    const savedGame: IGame = await newGame.save();

    //Finding the series and updating the gameId Array
    await Series.findByIdAndUpdate(
      seriesId,
      { $push: { games: savedGame._id } },
      { new: true }
    );

    res.status(201).send(savedGame);
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message, error: "Internal Server Error" });
  }
};

// Controller for Deleting the Game

export const deleteGame = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gameId = req.params.id;
    const deletedGame: IGame = await Game.findByIdAndDelete(gameId).exec();

    if (!deletedGame) {
      res.status(404).send({ success: false, message: "Game not found" });
      return;
    } else {
      const seriesId = deletedGame.seriesId;
      const series = Series.findById(seriesId).exec();

      if (series) {
        const ifDone = await Series.findByIdAndUpdate(
          seriesId,
          { $pop: { games: 1 } },
          { new: true }
        );

        if (ifDone) {
          res.status(200).send({
            success: true,
            message: "The Game from the series is completed",
          });
        }
      } else {
        res.status(404).send({
          succes: false,
          message: " Series Not Found from The game deleted",
        });
      }
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message, error: "Internal Server Error" });
  }
};
