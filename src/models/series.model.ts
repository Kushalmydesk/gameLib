import { Schema, Document, models, model, Model} from "mongoose";
import { IGame } from "./game.model";

export interface ISeries extends Document{
    title: string;
    games: Array<IGame['_id']>;
}

const seriesSchema:Schema = new Schema ({
    title: { type: String, required: true },
    games: [{ type: Schema.Types.ObjectId, ref:'Game' }],
},{
    timestamps: false,
    versionKey: false,
});


export default ( models.Series as Model<ISeries>) || 
model<ISeries>("Series", seriesSchema);