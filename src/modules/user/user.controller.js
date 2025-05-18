const { StatusCodes } = require("http-status-codes");
const { registerUser, loginUser } = require("./user.service");
const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");


const register = catchAsync(async (req, res) => {
    const result = await registerUser(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "User registered successfully",
        data: result,
    });
});

const login = catchAsync(async (req, res) => {
    const result = await loginUser(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "User logged in successfully",
        data: result,
    });
});

module.exports = {
    register,
    login,
};
