const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
        },
    },
    { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
