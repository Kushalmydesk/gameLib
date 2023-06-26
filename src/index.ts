import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import { Error } from "mongoose";
import {connectToDB}  from "./services/mongodb.service";
import gameRoutes from "./routes/game.route";
import imageRoutes from "./routes/image.route";
import seriesRoutes from "./routes/series.route";



dotenv.config();

const app = express();

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const PORT= process.env.PORT;
//starting the server made with express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Api for game Services
app.use("/api", gameRoutes);
app.use("/api", imageRoutes);

//Api for series Services
app.use("/api", seriesRoutes)

connectToDB().
        then(()=>{
            app.listen(PORT, () => {
                console.log(`The Server is listening on http://localhost:${PORT}/`);
            });
        })
        .catch((error: Error)=>{
            console.log("Database connection Failed", error);
            process.exit();
        });
