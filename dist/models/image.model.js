"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    gameId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Game", required: true },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.models.Image ||
    (0, mongoose_1.model)("Image", imageSchema);
//# sourceMappingURL=image.model.js.map