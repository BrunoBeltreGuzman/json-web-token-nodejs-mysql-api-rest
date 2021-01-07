const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.post("/signin", controllers.signin);
router.post("/signup", controllers.signup);

module.exports = router;
