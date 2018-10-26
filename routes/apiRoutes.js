const user = require("../models/user");
const workout = require("../models/workout");

module.exports = app => {
  app.get("/api/users", (req, res) => {
    res.json(user);
  });

  // Create a new example
  app.post("/api/workouts", (req, res) => {
    res.json(workout);
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", (req, res) => {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
  //     res.json(dbExample);
  //   });
  // });
};
