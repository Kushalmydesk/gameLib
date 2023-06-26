import { Schema, models, model, Model, Document } from "mongoose";

export interface IImage extends Document {
  name: string;
  imageUrl: string;
  gameId: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const imageSchema: Schema = new Schema<IImage>(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    gameId: { type: Schema.Types.ObjectId, ref: "Game", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default (models.Image as Model<IImage>) ||
  model<IImage>("Image", imageSchema);
