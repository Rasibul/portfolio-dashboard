const express = require("express");
const UserRoutes = require("../modules/user/user.routes");
const blogsRoutes = require("../modules/blogs/blogs.routes");
const experienceRoutes = require("../modules/experience/experience.routes");
const projectRoutes = require("../modules/project/project.routes");
const skillRoutes = require("../modules/skills/skills.routes");
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
	{
		path: "/project",
		route: projectRoutes
	},
	{
		path: "/skills",
		route: skillRoutes
	},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
