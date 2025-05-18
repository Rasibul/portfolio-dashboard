
const AppError = require("../../errors/AppError");
const { StatusCodes } = require("http-status-codes");
const Skill = require("./skills.schema");

const createSkill = async (data) => {
    const exists = await Skill.findOne({ name: data.name });
    if (exists) {
        throw new AppError(StatusCodes.CONFLICT, "Skill already exists");
    }
    return await Skill.create(data);
};

const getSkills = async () => {
    return await Skill.find({});
};

const deleteSkill = async (id) => {
    const result = await Skill.findByIdAndDelete(id);
    return result;
};

const skillService = {
    createSkill,
    getSkills,
    deleteSkill,
};

module.exports = skillService;
