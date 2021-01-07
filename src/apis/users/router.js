const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

const jsonwebtoken = require("../../lib/auth/jwt.js");

router.post(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isReader],
       controllers.insert
);

router.put(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.update
);

router.delete(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.delete
);

router.get("/", [jsonwebtoken.allRols], controllers.findAll);

router.get(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isReader],
       controllers.findById
);

module.exports = router;
