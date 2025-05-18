const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
    {
        companyName: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        location: { type: String, required: true },
        description: { type: String },
    },
    { timestamps: true }
);

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
