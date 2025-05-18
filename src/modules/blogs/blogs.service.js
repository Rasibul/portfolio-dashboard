
const { StatusCodes } = require("http-status-codes");
const Blog = require("./blogs.schema");
const AppError = require("../../errors/AppError");

const createBlog = async (data, userId) => {
    return await Blog.create({ ...data, author: userId });
};

const getAllBlogs = async () => {
    return await Blog.find().sort({ createdAt: -1 });
};

const getSingleBlog = async (id) => {
    const blog = await Blog.findById(id);
    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Blog not found");
    return blog;
};

const updateBlog = async (id, data) => {
    const blog = await Blog.findOne({ _id: id });
    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Not found or unauthorized");

    Object.assign(blog, data);
    return await blog.save();
};

const deleteBlog = async (id) => {
    const blog = await Blog.findOneAndDelete({ _id: id });
    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Not found or unauthorized");
    return blog;
};

module.exports = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
