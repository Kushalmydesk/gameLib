// External Dependencies
import { Schema, Document, models, model, Model } from "mongoose";

//Class Implementation

export interface IGame extends Document {
  title: string;
  genre: string;
  platform: string;
  releaseYear: number;
  developer: string;
  publisher: string;
  description: string;
  image: Schema.Types.ObjectId;
  rating: string;
  tags: string[];
  languages: string[];
  multiplayer: boolean;
  platforms: string[];
  seriesId: Schema.Types.ObjectId;
}

const gameSchema: Schema = new Schema<IGame>(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    platform: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    developer: { type: String, required: true },
    publisher: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Schema.Types.ObjectId, ref: "Image" },
    rating: { type: String, required: true },
    tags: { type: [String], required: false, default: [] },
    languages: { type: [String], required: false, default: [] },
    multiplayer: { type: Boolean, required: true },
    platforms: { type: [String], required: true },
    seriesId : {type: Schema.Types.ObjectId, ref: "Series"}
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export default (models.Games as Model<IGame>) ||
  model<IGame>("Games", gameSchema);
