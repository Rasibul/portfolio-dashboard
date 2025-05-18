const express = require("express");
const authMiddleware = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/", experienceController.getExperiences);
router.post("/", authMiddleware("admin"), experienceController.createExperience);
router.delete("/:id", authMiddleware("admin"), experienceController.deleteExperience);

const experienceRoutes = router;
module.exports = experienceRoutes;
