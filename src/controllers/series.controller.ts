import { NextFunction, Request, Response } from "express";
import Series, { ISeries } from "../models/series.model";
import Game from "../models/game.model";

//For getting each of the series
export const getSeries = async (req: Request, res: Response): Promise<void> => {
  try {
    const series: ISeries[] = await Series.find({}).exec();
    res.status(200).send({ success: true, message: "Series Found", series });
  } catch (err) {
    console.log("Error getting series", err.message);
  }
};

//For getting wach games by providing the series..
export const getGamesBySeries = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const { seriesId } = req.params;
    const series = await Series.findById(seriesId).exec();

    if (!series) {
      return res
        .status(404)
        .send({ succes: false, message: "No Series Found!" });
    }

    const gameIds = series.games;

    const games = await Game.find({ _id: { $in: gameIds } })
      .sort({ releaseYear: 1 })
      .exec();

    res.status(200).send({
      success: true,
      seriesName: series.title,
      message: "Games Found",
      games,
    });
  } catch (err) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
    console.log(err.message);
  }
};

//For Creating the Series

export const createSeries = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title } = req.body;

    const newSeries = new Series({ title });

    const savedSeries = await newSeries.save();

    return res.status(201).send(savedSeries);
  } catch (err) {
    console.log("Erro creating series", err.message);
  }
};
