const express = require("express");
const userController = require("./user.controller");
const router = express.Router();


router.post("/register", userController.register);
router.post("/login", userController.login);

const UserRoutes = router;
module.exports = UserRoutes;