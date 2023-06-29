"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const seriesSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    games: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Game' }],
}, {
    timestamps: false,
    versionKey: false,
});
exports.default = mongoose_1.models.Series ||
    (0, mongoose_1.model)("Series", seriesSchema);
//# sourceMappingURL=series.model.js.map