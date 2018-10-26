const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.myWorkouts_DB.findAll({}).then(db.myWorkouts_DB => {
      res.render("index", {
        msg: "Welcome!",
        examples: db.myWorkouts_DB
      });
    });
  });

  // Load home page
  app.get("/home", (req, res) => {
    db.Example.findAll({}).then(myWorkouts_DB => {
      res.render("home", {
        examples: myWorkouts_DB,
        // Placeholder values, to be replaced with user inputs
        user: "user placeholder",
        lastBench: 200,
        lastSquat: 305,
        lastDead: 405,
        b3Totals: 910
      });
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", (req, res) => {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
