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
  tagArray: string[];
  langArray: string[];
  multiplayer: boolean;
  platformArray: string[];
  seriesId: Schema.Types.ObjectId;
  imageUrl: string;
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
    tagArray: { type: [String], required: false, default: [] },
    langArray: { type: [String], required: false, default: [] },
    multiplayer: { type: Boolean, required: true },
    platformArray: { type: [String], required: true },
    seriesId: { type: Schema.Types.ObjectId, ref: "Series" },
    imageUrl: { type: String, required: true, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default (models.Games as Model<IGame>) ||
  model<IGame>("Games", gameSchema);
