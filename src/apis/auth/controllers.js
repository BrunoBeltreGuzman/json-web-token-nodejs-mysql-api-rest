const model = require("./model");
const bcrypt = require("../../lib/auth/bcrypt");
const jsonwebtoken = require("../../lib/auth/jwt.js");

module.exports = {
       /*
              Signin
       */
       async signin(request, response) {
              const name = request.body.name;
              const password = request.body.password;
              console.log(name);
              if (typeof name !== "undefined") {
                     if (typeof password !== "undefined") {
                            try {
                                   const result = await model.signin(
                                          name,
                                          async function (result) {
                                                 if (result[0]) {
                                                        const validPassword = await bcrypt.matchPassword(
                                                               password,
                                                               result[0]
                                                                      .password
                                                        );
                                                        if (validPassword) {
                                                               const token = await jsonwebtoken.signJwt(
                                                                      result[0]
                                                               );
                                                               response.json({
                                                                      user:
                                                                             result[0],
                                                                      token: token,
                                                                      message:
                                                                             "Success",
                                                               });
                                                        } else {
                                                               response.json({
                                                                      message:
                                                                             "Incorrect Password",
                                                               });
                                                        }
                                                 } else {
                                                        response.json({
                                                               message:
                                                                      "The Username does not exists.",
                                                        });
                                                 }
                                          }
                                   );
                            } catch (error) {
                                   throw error;
                            }
                     } else {
                            response.status(400).json({
                                   message: "Password required",
                            });
                     }
              } else {
                     response.status(400).json({ message: "User required" });
              }
       },

       /*
              Signup signup
       */
       async signup(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              try {
                     //bcrypt password
                     const password = await bcrypt.encryptPassword(
                            request.body.password
                     );

                     const result = await model.signup(
                            name,
                            email,
                            password,
                            function (result) {
                                   response.json(result);
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },
};
