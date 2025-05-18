const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        projectImage: {
            type: String,
        },
        liveLink: {
            type: String,
        },
        clientRepo: {
            type: String,
        },
        serverRepo: {
            type: String,
        },
        description: {
            type: String,
        },
        technologies: [
            {
                name: { type: String },
                logo: { type: String },
            },
        ],
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
