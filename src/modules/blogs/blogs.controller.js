const catchAsync = require("../utils/catchAsync");
const sendResponse = require("../utils/sendResponse");
const { StatusCodes } = require("http-status-codes");
const blogService = require("../services/blogService");

exports.createBlog = catchAsync(async (req, res) => {
    const blog = await blogService.createBlog(req.body, req.user._id);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Blog created successfully",
        data: blog,
    });
});

exports.getAllBlogs = catchAsync(async (req, res) => {
    const blogs = await blogService.getAllBlogs();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "All blogs fetched",
        data: blogs,
    });
});

exports.getSingleBlog = catchAsync(async (req, res) => {
    const blog = await blogService.getSingleBlog(req.params.id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Single blog fetched",
        data: blog,
    });
});

exports.updateBlog = catchAsync(async (req, res) => {
    const blog = await blogService.updateBlog(req.params.id, req.body, req.user._id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Blog updated",
        data: blog,
    });
});

exports.deleteBlog = catchAsync(async (req, res) => {
    await blogService.deleteBlog(req.params.id, req.user._id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Blog deleted",
    });
});
