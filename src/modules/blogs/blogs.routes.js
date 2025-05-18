const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const auth = require("../middlewares/authMiddleware");

// Public routes
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getSingleBlog);

// Protected routes
router.post("/", auth("admin"), blogController.createBlog);
router.patch("/:id", auth("admin"), blogController.updateBlog);
router.delete("/:id", auth("admin"), blogController.deleteBlog);

module.exports = router;
