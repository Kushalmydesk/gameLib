"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    platform: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    developer: { type: String, required: true },
    publisher: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: mongoose_1.Schema.Types.ObjectId, ref: "Image" },
    rating: { type: String, required: true },
    tags: { type: [String], required: false, default: [] },
    languages: { type: [String], required: false, default: [] },
    multiplayer: { type: Boolean, required: true },
    platforms: { type: [String], required: true },
    seriesId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Series" }
}, {
    timestamps: false,
    versionKey: false,
});
exports.default = mongoose_1.models.Games ||
    (0, mongoose_1.model)("Games", gameSchema);
//# sourceMappingURL=game.model.js.map