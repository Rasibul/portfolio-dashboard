const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const { StatusCodes } = require("http-status-codes");
const skillService = require("./skills.service");

const createSkill = catchAsync(async (req, res) => {
    const result = await skillService.createSkill(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Skill added successfully",
        data: result,
    });
});

const getSkills = catchAsync(async (req, res) => {
    const result = await skillService.getSkills();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Skills fetched successfully",
        data: result,
    });
});

const deleteSkill = catchAsync(async (req, res) => {
    const result = await skillService.deleteSkill(req.params.id);
    if (!result) {
        sendResponse(res, {
            statusCode: StatusCodes.NOT_FOUND,
            success: false,
            message: "Skill not found",
            data: null,
        });
        return;
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Skill deleted successfully",
    });
});

const skillController = {
    createSkill,
    getSkills,
    deleteSkill,
};

module.exports = skillController;
