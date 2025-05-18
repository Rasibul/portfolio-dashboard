const AppError = require("../errors/AppError");
const { StatusCodes } = require("http-status-codes");
const { verifyToken } = require("../utils/tokenUtils");

const authMiddleware = (...requiredRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(new AppError(StatusCodes.UNAUTHORIZED, "No token provided"));
        }

        let token;

        // Handle both "Bearer <token>" and raw "<token>"
        const tokenParts = authHeader.split(" ");
        if (tokenParts.length === 2 && tokenParts[0] === "Bearer") {
            token = tokenParts[1];
        } else if (tokenParts.length === 1) {
            token = tokenParts[0];
        } else {
            return next(new AppError(StatusCodes.UNAUTHORIZED, "Invalid token format"));
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return next(new AppError(StatusCodes.UNAUTHORIZED, "Failed to authenticate token"));
        }

        if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
            return next(
                new AppError(StatusCodes.FORBIDDEN, "Access denied. Insufficient permissions.")
            );
        }

        req.user = decoded;
        next();
    };
};

module.exports = authMiddleware;
