import express, { Router } from 'express';
import {getSeries, createSeries, getGamesBySeries } from '../controllers/series.controller';


const router: Router = express.Router();

router.get("/series", getSeries);
router.post("/series", createSeries);
router.get("/series/:seriesId", getGamesBySeries);

export default router;