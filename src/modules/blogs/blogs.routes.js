const express = require("express");
const router = express.Router();

const { getAllBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require("./blogs.controller");
const authMiddleware = require("../../middlewares/authMiddleware");

// Public routes
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);

// Protected routes
router.post("/create-blog", authMiddleware("admin"), createBlog);
router.patch("/:id", authMiddleware("admin"), updateBlog);
router.delete("/:id", authMiddleware("admin"), deleteBlog);

const blogsRoutes = router;
module.exports = blogsRoutes;
