const db = require("../models");

module.exports = app => {
  // Get all examples
  app.get("/api/users", (req, res) => {
    db.myWorkouts_DB.findAll({}).then(dbmyWorkouts_DB => {
      res.json(dbmyWorkouts_DB);
    });
  });

  // Create a new example
  app.post("/api/workouts", (req, res) => {
    db.myWorkouts_DB.create(req.body).then(dbmyWorkouts_DB => {
      res.json(dbmyWorkouts_DB);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", (req, res) => {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
  //     res.json(dbExample);
  //   });
  // });
};
