
const AppError = require("../../errors/AppError");
const { StatusCodes } = require("http-status-codes");
const Project = require("./project.schema");

const createProject = async (data) => {
    const result = await Project.create(data);
    return result;
};

const getProjects = async () => {
    return await Project.find({});
};

const getSingleProject = async (id) => {
    const project = await Project.findById(id);
    if (!project) throw new AppError(StatusCodes.NOT_FOUND, "Project not found");
    return project;
};

const deleteProject = async (id) => {
    const project = await Project.findByIdAndDelete(id);
    return project;
};

const projectService = {
    createProject,
    getProjects,
    getSingleProject,
    deleteProject,
};

module.exports = projectService;
