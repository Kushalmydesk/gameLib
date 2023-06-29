"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_controller_1 = require("../controllers/game.controller");
const router = express_1.default.Router();
//Route for creating games
router.post("/game", game_controller_1.createGame);
//Route for getting all the games
router.get("/game", game_controller_1.getGames);
//Router for getting a game per id
router.get("/game/:id", game_controller_1.getGamesById);
//Router for Deleting a Game
router.delete("/game/:id", game_controller_1.deleteGame);
//Route for getting the games with series --- in the series.route.ts file
exports.default = router;
//# sourceMappingURL=game.route.js.map