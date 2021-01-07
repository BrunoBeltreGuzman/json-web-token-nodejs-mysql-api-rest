const connection = require("../../lib/connectionMySQL/connnectionMySQL");

module.exports = {
       /*
              Insert Users
       */
       async insert(name, email, password, response) {
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

       /*
              Update Users
       */
       async update(id, name, email, password, response) {
              try {
                     await connection.query(
                            {
                                   sql:
                                          "UPDATE  users SET name = ?, email = ?, password = ? WHERE id = ?",
                                   values: [name, email, password, id],
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
              Delete Users
       */
       async delete(id, response) {
              try {
                     await connection.query(
                            {
                                   sql: "DELETE FROM users WHERE id = ?",
                                   values: [id],
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

       async findAll(response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM users",
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

       async findById(id, response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM users WHERE id = ?",
                                   values: [id],
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
