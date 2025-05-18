const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");

// Import service functions with alias to avoid naming conflict
const experienceService = require("../experience/experience.service");
const { StatusCodes } = require("http-status-codes");

// Create
const createExperience = catchAsync(async (req, res) => {
    const result = await experienceService.createExperience(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Experience added successfully",
        data: result,
    });
});

// Get
const getExperiences = catchAsync(async (req, res) => {
    const result = await experienceService.getExperiences();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Experiences fetched successfully",
        data: result,
    });
});

// Delete
const deleteExperience = catchAsync(async (req, res) => {
    const result = await experienceService.deleteExperience(req.params.id);
    if (!result) {
        sendResponse(res, {
            statusCode: StatusCodes.NOT_FOUND,
            success: false,
            message: "Experience not found",
            data: null,
        });
        return;
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Experience deleted successfully",
    });
});

const experienceController = {
    createExperience,
    getExperiences,
    deleteExperience,
};

module.exports = experienceController;
