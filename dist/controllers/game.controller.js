"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.createGame = exports.getGamesById = exports.getGames = void 0;
const game_model_1 = __importDefault(require("../models/game.model"));
const series_model_1 = __importDefault(require("../models/series.model"));
//This is the function for getting
const getGames = async (req, res, next) => {
    try {
        const games = await game_model_1.default.find({}).exec();
        res.status(200).send(games);
    }
    catch (err) {
        console.log("Error getting games", err.message);
    }
};
exports.getGames = getGames;
const getGamesById = async (req, res) => {
    try {
        const gameId = req.params.id;
        const game = await game_model_1.default.findById(gameId).exec();
        res.status(200).send({
            game
        });
    }
    catch (err) {
        res
            .status(500)
            .send({ message: err.message, error: "Internal Server Error" });
    }
};
exports.getGamesById = getGamesById;
//This is the dunction for creating
const createGame = async (req, res, next) => {
    try {
        const { title, genre, platform, releaseYear, developer, publisher, description, rating, tags, languages, multiplayer, platforms, seriesId, } = req.body;
        const newGame = new game_model_1.default({
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
        const savedGame = await newGame.save();
        //Finding the series and updating the gameId Array
        await series_model_1.default.findByIdAndUpdate(seriesId, { $push: { games: savedGame._id } }, { new: true });
        res.status(201).send(savedGame);
    }
    catch (err) {
        res
            .status(500)
            .send({ message: err.message, error: "Internal Server Error" });
    }
};
exports.createGame = createGame;
const deleteGame = async (req, res) => {
    try {
        const gameId = req.params.id;
        const deletedGame = await game_model_1.default.findByIdAndDelete(gameId).exec();
        if (!deletedGame) {
            res.status(404).send({ success: false, message: "Game not found" });
            return;
        }
        else {
            const seriesId = deletedGame.seriesId;
            const series = series_model_1.default.findById(seriesId).exec();
            if (series) {
                const ifDone = await series_model_1.default.findByIdAndUpdate(seriesId, { $pop: { games: 1 } }, { new: true });
                if (ifDone) {
                    res.status(200).send({
                        success: true,
                        message: "The Game from the series is completed",
                    });
                }
            }
            else {
                res.status(404).send({
                    succes: false,
                    message: " Series Not Found from The game deleted",
                });
            }
        }
    }
    catch (err) {
        res
            .status(500)
            .send({ message: err.message, error: "Internal Server Error" });
    }
};
exports.deleteGame = deleteGame;
//# sourceMappingURL=game.controller.js.map