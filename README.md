# json-web-token-nodejs-mysql-api-rest
API-REST with Authentication Json Web Token, Node Js and MySQL and requests http get, post, put and delete.

# Structure:

**Simple and descriptive structure!**

```javascript
const express = require("express");
const controllers = require("controllers");
const jsonwebtoken = require("jwt");

const router = express.Router();

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
```

All routes are protected and secured with a specific type of authentication with **json web token**, before accessing the routes, authentication is verified with the **json web token** and the user role, in this case there are two types of user roles: admin and Reader, where each role has its accessible paths, and a path accessible to all, in this case the path `"/"` that corresponds to obtaining all users.

The controller from the apis of the users table is imported in this example and each function corresponding to each request is passed as parameters.

Thus, in each controller it receives the `request` and` response` parameters and is responsible for receiving what the client sends and once it does this, well, it responds. And the model, each model is in charge of making its respective queries in the database.


# Bcrypt:

**Bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on Blowfish encryption.**

```javascript
async encryptPassword(password) {
       try {
              const salt = await bcrypt.genSalt(10);
              const hash = await bcrypt.hash(password, salt);
              return hash;
       } catch (error) {
              throw error;
       }
};

async matchPassword(password, savedPassword) {
       try {
              const boo = await bcrypt.compare(password, savedPassword);
              return boo;
       } catch (error) {
              throw error;
       }
};
```

The rest api uses two Bcrypt functions `encryptPassword(password)` to encrypt the password and `matchPassword(password, savedPassword) ` to decrypt it.


# JSON Web Token:

**JSON Web Token is an open standard based on JSON proposed by the IETF for the creation of access tokens that allow the propagation of identity and privileges**

```javascript
async verifyToken(request, response, next) {
       let token = request.headers["authorization"];
       if (token) {
              try {
                     const decode = await jwt.verify(token, config.secret);
                     request.user = decode.user;
                     next();
              } catch (error) {
                     throw error;
              }
       }else{
              return response.status(403).send({
                     message: "No token provided!",
              });
       }
};
```


# Install

**Install**

```console
$ npm install
```

**Run**

```console
$ npm run dev

or

$ node src/index.js
```

**Dependencies**

```json
"dependencies": {
       "bcryptjs": "^2.4.3",
       "express": "^4.17.1",
       "jsonwebtoken": "^8.5.1",
       "morgan": "^1.10.0",
       "mysql": "^2.18.1"
},
"devDependencies": {
       "nodemon": "^2.0.6"
}
```


# Routers:

**Sign:**

Signup

`POST - http://localhost:2000/sign/signup`

Signin

`POST - http://localhost:2000/sign/signin`

**Api rest users:**

Fetch ALL Records

`GET - http://localhost:2000/users`

Fetch Single Record

`GET - http://localhost:2000/users/{id}`

Create Record

`POST - http://localhost:2000/users`

Update Record

`PUT - http://localhost:2000/users/{id}`

Remove Records

`DELETE - http://localhost:2000/users/{id}`
