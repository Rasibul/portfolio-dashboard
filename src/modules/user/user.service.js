
const { StatusCodes } = require("http-status-codes");
const AppError = require("../../errors/AppError");
const { generateToken } = require("../../utils/tokenUtils");
const User = require("./user.schema");

const registerUser = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError(StatusCodes.BAD_REQUEST, "Email already in use");
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id, user.role);

    return {
        token,
    };
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid email or password");
    }

    const token = generateToken(user._id, user.role);

    return {
        user: {
            name: user.name,
            email: user.email,
            role: user.role,
        },
        token,
    };
};

const getProfile = async (user) => {
    const foundUser = await User.findById(user._id).select("-password");
    return foundUser;
};

const userService = {
    registerUser,
    loginUser,
    getProfile
};

module.exports = userService;