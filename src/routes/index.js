const express = require("express");
const UserRoutes = require("../modules/user/user.routes");
const blogsRoutes = require("../modules/blogs/blogs.routes");
const experienceRoutes = require("../modules/experience/experience.routes");
const router = express.Router();



const moduleRoutes = [
	{
		path: "/user",
		route: UserRoutes
	},
	{
		path: "/blogs",
		route: blogsRoutes
	},
	{
		path: "/experience",
		route: experienceRoutes
	},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
