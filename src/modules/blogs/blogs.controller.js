

const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");

const createBlog = catchAsync(async (req, res) => {
    const blog = await blogsService.createBlog(req.body, req.user._id);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Blog created successfully",
        data: blog,
    });
});

const getAllBlogs = catchAsync(async (req, res) => {
    const blogs = await blogsService.getAllBlogs();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "All blogs fetched",
        data: blogs,
    });
});

const getSingleBlog = catchAsync(async (req, res) => {
    const blog = await blogsService.getSingleBlog(req.params.id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Single blog fetched",
        data: blog,
    });
});

const updateBlog = catchAsync(async (req, res) => {
    const blog = await blogsService.updateBlog(req.params.id, req.body);
    console.log(blog);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Blog updated",
        data: blog,
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    await blogsService.deleteBlog(req.params.id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Blog deleted",
    });
});

const blogsController = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
module.exports = blogsController;