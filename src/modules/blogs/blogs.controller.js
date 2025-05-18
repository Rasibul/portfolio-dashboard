

const { StatusCodes } = require("http-status-codes");
const { createBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog } = require("./blogs.service");
const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");

exports.createBlog = catchAsync(async (req, res) => {
    const blog = await createBlog(req.body, req.user._id);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Blog created successfully",
        data: blog,
    });
});

exports.getAllBlogs = catchAsync(async (req, res) => {
    const blogs = await getAllBlogs();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "All blogs fetched",
        data: blogs,
    });
});

exports.getSingleBlog = catchAsync(async (req, res) => {
    const blog = await getSingleBlog(req.params.id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Single blog fetched",
        data: blog,
    });
});

exports.updateBlog = catchAsync(async (req, res) => {
    const blog = await updateBlog(req.params.id, req.body);
    console.log(blog);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Blog updated",
        data: blog,
    });
});

exports.deleteBlog = catchAsync(async (req, res) => {
    await deleteBlog(req.params.id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Blog deleted",
    });
});
