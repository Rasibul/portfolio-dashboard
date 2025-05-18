const AppError = require("../../errors/AppError");
const Experience = require("./experience.schema");


// Create a new experience
const createExperience = async (payload) => {
    const result = await Experience.create(payload);
    return result;
};

// Get all experiences (formatted)
const getExperiences = async () => {
    const experiences = await Experience.find().sort({ startDate: -1 });

    const formatted = experiences.map((exp) => ({
        _id: exp._id,
        companyName: exp.companyName,
        position: exp.position,
        description: exp.description,
        startDate: exp.startDate,
        endDate: exp.endDate,
        createdAt: exp.createdAt,
        updatedAt: exp.updatedAt,
    }));

    if (formatted.length === 0) throw new AppError(StatusCodes.NOT_FOUND, "No experience found");


    return formatted;
};

// Delete experience
const deleteExperience = async (id) => {
    const result = await Experience.findByIdAndDelete(id);
    return result;
};

const experienceService = {
    createExperience,
    getExperiences,
    deleteExperience,
};

module.exports = experienceService;
