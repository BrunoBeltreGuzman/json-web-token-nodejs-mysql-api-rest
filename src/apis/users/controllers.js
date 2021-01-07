const model = require("./model");
const bcrypt = require("../../lib/auth/bcrypt");

module.exports = {
       /*
              Insert Users
       */
       async insert(request, response) {
              const name = request.body.name;
              const email = request.body.email;

              try {
                     //bcrypt password
                     const password = await bcrypt.encryptPassword(
                            request.body.password
                     );

                     const result = await model.insert(
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

       /*
              Update Users
       */
       async update(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              const id = request.params.id;

              try {
                     //bcrypt password
                     const password = await bcrypt.encryptPassword(
                            request.body.password
                     );

                     const result = await model.update(
                            id,
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

       /*
              Delete Users
       */
       async delete(request, response) {
              const id = request.params.id;

              try {
                     await model.delete(id, function (result) {
                            response.json(result);
                     });
              } catch (error) {
                     throw error;
              }
       },

       /*
              FindAll Users
       */
       async findAll(request, response) {
              try {
                     await model.findAll(function (result) {
                            response.json(result);
                     });
              } catch (error) {
                     throw error;
              }
       },

       /*
              FindById Users
       */
       async findById(request, response) {
              const id = request.params.id;

              try {
                     await model.findById(id, function (result) {
                            response.json(result);
                     });
              } catch (error) {
                     throw error;
              }
       },
};
