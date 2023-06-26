import { Request, Response, NextFunction } from "express";
import Game, { IGame } from "../models/game.model";
import Series from "../models/series.model";

//This is the function for getting
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
): Promise<void>  => {
  try {
    const gameId  = req.params.id;
    

    const game: IGame = await Game.findById(gameId).exec();
    res.status(200).send({ 
       game
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message, error: "Internal Server Error" });
  }
};

//This is the dunction for creating
export const createGame = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
      seriesId,
    } = req.body;

    const newGame = new Game({
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
      seriesId,
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

export const deleteGame = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  gameId  = req.params.id;
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
