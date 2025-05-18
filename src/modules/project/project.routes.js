const express = require("express");
const authMiddleware = require("../../middlewares/authMiddleware");
const projectController = require("./project.controller");
const router = express.Router();


// Only authenticated users (e.g., you as admin) can create/delete projects
router.post("/", authMiddleware("admin"), projectController.createProject);
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getSingleProject);
router.delete("/:id", authMiddleware("admin"), projectController.deleteProject);

const projectRoutes = router;
module.exports = projectRoutes;