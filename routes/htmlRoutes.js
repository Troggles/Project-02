const db = require("../models");

module.exports = app => {
  // Load index page

  // Load home page
  app.get("/", (req, res) => {
    res.render("home", {
      // Placeholder values, to be replaced with user inputs
      user: "user placeholder",
      lastBench: 200,
      lastSquat: 305,
      lastDead: 405,
      b3Totals: 910
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
