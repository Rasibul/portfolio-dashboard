const express = require("express");
const userController = require("./user.controller");
const authMiddleware = require("../../middlewares/authMiddleware");
const router = express.Router();


router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", authMiddleware(), userController.getProfile);

const UserRoutes = router;
module.exports = UserRoutes;