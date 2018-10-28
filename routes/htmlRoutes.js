const db = require("../models");

module.exports = app => {
  // Load login page
  app.get("/", (req, res) => {
    res.render("login");
  });

  // // Load home page
  // app.get("/", (req, res) => {
  //   res.render("home", {
  //     // Placeholder values, to be replaced with user inputs
  //     user: "user placeholder",
  //     lastBench: 200,
  //     lastSquat: 305,
  //     lastDead: 405,
  //     b3Totals: 910
  //   });
  // });

  app.get("/:username", (req, res) => {
    db.User.findOrCreate({ where: { username: req.params.username } }).spread(
      (user, created) => {
        if (created) console.log(`Created new user ${user.username}`);

        res.render("home", {
          user
        });
      }
    );
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