const express = require("express");
const UserRoutes = require("../modules/user/user.routes");
const router = express.Router();



const moduleRoutes = [
	{
		path: "/user",
		route: UserRoutes
	},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
