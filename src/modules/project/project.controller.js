const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const { StatusCodes } = require("http-status-codes");
const projectService = require("./project.service");

const createProject = catchAsync(async (req, res) => {
    const result = await projectService.createProject(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Project added successfully",
        data: result,
    });
});

const getProjects = catchAsync(async (req, res) => {
    const result = await projectService.getProjects();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Projects fetched successfully",
        data: result,
    });
});

const getSingleProject = catchAsync(async (req, res) => {
    const result = await projectService.getSingleProject(req.params.id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Project fetched successfully",
        data: result,
    });
});

const deleteProject = catchAsync(async (req, res) => {
    const result = await projectService.deleteProject(req.params.id);
    if (!result) {
        sendResponse(res, {
            statusCode: StatusCodes.NOT_FOUND,
            success: false,
            message: "Project not found",
            data: null,
        });
        return;
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Project deleted successfully",
    });
});

const projectController = {
    createProject,
    getProjects,
    getSingleProject,
    deleteProject,
};

module.exports = projectController;
