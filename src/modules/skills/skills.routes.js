const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const skillController = require("./skills.controller");


// Only admin can add or delete
router.post("/", authMiddleware("admin"), skillController.createSkill);
router.get("/", skillController.getSkills);
router.delete("/:id", authMiddleware("admin"), skillController.deleteSkill);

const skillRoutes = router;
module.exports = skillRoutes;