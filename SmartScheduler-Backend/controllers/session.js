const express = require("express");
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const session = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

// GET SESSION
session.get("/", (req, res) => {
  if (req.session.currentUser !== null || req.session.currentUser !== "") {
    res.status(200).send({
      currentUser: req.session.currentUser
    });
  } else {
    res.status(200).send({
      currentUser: req.session.currentUser
    });
  }
});

// session.get("/api/session", withAuth, function(req, res) {
//   res.send("The password is potato");
// });

// session.get("/new", (req, res) => {
//   res.redirect("/api/session");
// });

// from JWT example, comment this out for now

// user.post('/api/register', function(req, res) {
//     const { email, password } = req.body;
//     const user = new User({ email, password });
//     user.save(function(err) {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error registering new user please try again.");
//       } else {
//         res.status(200).send("Welcome to the club!");
//       }
//     });
//   });

// NEW SESSION
session.post("/", (req, res) => {
  User.findOne(
    { username: req.body.username, category: req.body.category },
    (err, foundUser) => {
      if (!foundUser) {
        res.status(200).json({ error: "Incorrect username or password." });
      } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        if (foundUser.category === "admin") {
          req.session.currentUser = foundUser;
          res.status(200).json({
            currentUser: req.session.currentUser,
            AdminMain: true
          });
        } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
          if (foundUser.category === "patient") {
            req.session.currentUser = foundUser;
            // res.redirect("/appointment/:id");
            res.status(200).json({
              currentUser: req.session.currentUser,
              Patient: true
            });
          } else {
            res.status(200).json({ error: err.message });
          }
        }
      }
    }
  );
});
// this code comes from Seymur's
// router.post("/", (req, res) => {
//   User.findOne({ username: req.body.username }, (err, foundUser) => {
//     if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//       if (foundUser.username === "admin") {
//         req.session.currentUser = foundUser;
//         res.redirect("/appointiment/admin");
//       } else {
//         req.session.currentUser = foundUser;
//         res.redirect("/appointment/:id");
//       }
//     } else {
//       res.send("Wrong Password");
//     }
//   });
// });

session.delete("/", (req, res) => {
  req.session.destroy((err, currentSession) => {
    if (err) {
      res.status(200).json({ error: err.message });
    }
    res.status(200).json(currentSession);
    // res.redirect("/");
  });
});

module.exports = session;
