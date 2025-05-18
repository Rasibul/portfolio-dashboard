const AppError = require("../../errors/AppError");
const { StatusCodes } = require("http-status-codes");
const Blog = require("./blogs.schema");
// Create blog
const createBlog = async (payload) => {
    const result = await Blog.create(payload);
    return result;
};

// Get all blogs
const getAllBlogs = async () => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return blogs;
};

// Get single blog
const getSingleBlog = async (id) => {
    const blog = await Blog.findById(id);
    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Blog not found");
    return blog;
};

// Delete blog
const deleteBlog = async (id) => {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Blog not found");
    return blog;
};

const blogService = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
};
module.exports = blogService;