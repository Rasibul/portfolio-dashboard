const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const blogsController = require("./blogs.controller");

// Public routes
router.get("/", blogsController.getAllBlogs);
router.get("/:id", blogsController.getSingleBlog);

// Protected routes
router.post("/create-blog", authMiddleware("admin"), blogsController.createBlog);
router.patch("/:id", authMiddleware("admin"), blogsController.updateBlog);
router.delete("/:id", authMiddleware("admin"), blogsController.deleteBlog);

const blogsRoutes = router;
module.exports = blogsRoutes;