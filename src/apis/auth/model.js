const connection = require("../../lib/connectionMySQL/connnectionMySQL");

module.exports = {
       /*
              Signin
       */
       async signin(name, response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM users WHERE name = ?",
                                   values: [name],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },

       /*
              Signup
       */
       async signup(name, email, password, response) {
              try {
                     await connection.query(
                            {
                                   sql:
                                          "INSERT INTO users (name, email, password) VALUES (?,?,?)",
                                   values: [name, email, password],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },
};
