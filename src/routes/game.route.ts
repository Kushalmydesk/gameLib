import express, { Router } from "express";
import { createGame, deleteGame, getGames, getGamesById } from "../controllers/game.controller";


const router:Router = express.Router();

//Route for creating games
router.post("/game", createGame);
//Route for getting all the games
router.get("/game", getGames,);
//Router for getting a game per id
router.get("/game/:id", getGamesById);
//Router for Deleting a Game
router.delete("/game/:id", deleteGame);


//Route for getting the games with series --- in the series.route.ts file

export default router;