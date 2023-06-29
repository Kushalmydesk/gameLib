"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const series_controller_1 = require("../controllers/series.controller");
const router = express_1.default.Router();
router.get("/series", series_controller_1.getSeries);
router.post("/series", series_controller_1.createSeries);
router.get("/series/:seriesId", series_controller_1.getGamesBySeries);
exports.default = router;
//# sourceMappingURL=series.route.js.map