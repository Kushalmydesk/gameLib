"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeries = exports.getGamesBySeries = exports.getSeries = void 0;
const series_model_1 = __importDefault(require("../models/series.model"));
const game_model_1 = __importDefault(require("../models/game.model"));
//For getting each of the series
const getSeries = async (req, res) => {
    try {
        const series = await series_model_1.default.find({}).exec();
        res.status(200).send({ success: true, message: "Series Found", series });
    }
    catch (err) {
        console.log("Error getting series", err.message);
    }
};
exports.getSeries = getSeries;
//For getting wach games by providing the series..
const getGamesBySeries = async (req, res, next) => {
    try {
        const { seriesId } = req.params;
        const series = await series_model_1.default.findById(seriesId).exec();
        if (!series) {
            res.status(404).send({ succes: false, message: "No Series Found!" });
            return;
        }
        const gameIds = series.games;
        const games = await game_model_1.default.find({ _id: { $in: gameIds } }).sort({ releaseYear: 1 }).exec();
        res.status(200).send({
            success: true,
            seriesName: series.title,
            message: "Games Found",
            games,
        });
    }
    catch (err) {
        res.status(500).send({
            message: "Internal Server Error",
            success: false,
        });
        console.log(err.message);
    }
};
exports.getGamesBySeries = getGamesBySeries;
//For Creating the Series
const createSeries = async (req, res) => {
    try {
        const { title } = req.body;
        const newSeries = new series_model_1.default({ title });
        const savedSeries = await newSeries.save();
        res.status(201).send(savedSeries);
    }
    catch (err) {
        console.log("Erro creating series", err.message);
    }
};
exports.createSeries = createSeries;
//# sourceMappingURL=series.controller.js.map