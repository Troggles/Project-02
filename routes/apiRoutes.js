const db = require("../models/");

module.exports = app => {
  // Get all examples
  app.get("/api/:username", (req, res) => {
    db.User.findOne({
      where: { username: req.params.username }
    }).then(user => {
      res.json(user);
    });
  });

  // Create a new example
  app.get("/api/workouts", (req, res) => {
    db.User.findAll({}).then(workouts => {
      res.json(workouts);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", (req, res) => {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
  //     res.json(dbExample);
  //   });
  // });
};
