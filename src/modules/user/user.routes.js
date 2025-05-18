const express = require("express");
const { register, login } = require("./user.controller");
const router = express.Router();


router.post("/register", register);
router.post("/login", login);

const UserRoutes = router;
module.exports = UserRoutes;