"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_service_1 = require("./services/mongodb.service");
const game_route_1 = __importDefault(require("./routes/game.route"));
const image_route_1 = __importDefault(require("./routes/image.route"));
const series_route_1 = __importDefault(require("./routes/series.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const PORT = process.env.PORT;
//starting the server made with express
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Api for game Services
app.use("/api", game_route_1.default);
app.use("/api", image_route_1.default);
//Api for series Services
app.use("/api", series_route_1.default);
(0, mongodb_service_1.connectToDB)().
    then(() => {
    app.listen(PORT, () => {
        console.log(`The Server is listening on http://localhost:${PORT}/`);
    });
})
    .catch((error) => {
    console.log("Database connection Failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map