const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const userService = require("./user.service");


const register = catchAsync(async (req, res) => {
    const result = await userService.registerUser(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "User registered successfully",
        data: result,
    });
});

const login = catchAsync(async (req, res) => {
    const result = await userService.loginUser(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "User logged in successfully",
        data: result,
    });
});

const getProfile = catchAsync(async (req, res) => {
    console.log(req);
    const result = await userService.getProfile(req.user);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "User profile retrieved successfully",
        data: result,
    });
});







const userController = {
    register,
    login,
    getProfile,
};

module.exports = userController;