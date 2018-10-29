const db = require("../models");
const { LocalStorage } = require('node-localstorage').LocalStorage;

module.exports = app => {
  // Login page
  app.get("/", (req, res) => {
    const localStorage = new LocalStorage("/scratch");

    const { saveUser } = req.query.saveUser === "true";
    const savedUser =
      localStorage.getItem("savedUser") || sessionStorage.getItem("savedUser");

    if (savedUser) {
      // fetch user data from db
      db.User.findOne({
        where: {
          id: savedUser
        }
      }).then(user => {
        if (user) {
          if (saveUser) {
            // save to localStorage
            localStorage.setItem("savedUser", user.id);
          } else {
            // save to sessionStorage
            sessionStorage.setItem("savedUser", user.id);
          }

          res.render("home", {
            user
          });
        } else {
          // username not found
          console.log(`Error: could not find user with id '${savedUser}'`);

          // remove non-existent username from localStorage and sessionStorage
          localStorage.removeItem("savedUser");
          sessionStorage.removeItem("savedUser");

          // render login page
          res.render("login");
        }
      });
    } else {
      // render login page
      res.render("login");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};

// const { saveUser } = req.query.saveUser === "true";
// const savedUser =
//   localStorage.getItem("savedUser") || sessionStorage.getItem("savedUser");

// if (savedUser) {
//   // fetch user data from db
//   db.User.findOne({
//     where: {
//       id: savedUser
//     }
//   }).then(user => {
//     if (user) {
//       if (saveUser) {
//         // save to localStorage
//         localStorage.setItem("savedUser", user.id);
//       } else {
//         // save to sessionStorage
//         sessionStorage.setItem("savedUser", user.id);
//       }

//       res.render("home", {
//         user
//       });
//     } else {
//       // username not found
//       console.log(`Error: could not find user with id '${savedUser}'`);

//       // remove non-existent username from localStorage and sessionStorage
//       localStorage.removeItem("savedUser");
//       sessionStorage.removeItem("savedUser");

//       // render login page
//       res.render("login");
//     }
//   });
// } else {
//   // render login page
//   res.render("login");
// }