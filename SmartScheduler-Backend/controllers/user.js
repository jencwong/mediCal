const express = require("express");
const user = express.Router();
const User = require("../models/users.js");

//Index Route
user.get("/", (req, res) => {
  User.find({}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ err: err.message });
    }
    res.status(200).json(foundUser);
  });
});

//Create User Route
user.post("/sign-up", (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({ err: err.message });
    } else {
      res.status(200).json(createdUser);
    }
  });
});

// Show Specific Patient
user.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, foundPatient) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json({
      foundPatient: foundPatient,
      currentUser: req.session.currentUser
    });
  });
});

// // POST route to register a user
// user.post("/api/register", function(req, res) {
//   const { email, password } = req.body;
//   const newUser = new User({ email, password });
//   newUser.save(function(err) {
//     if (err) {
//       res.status(500).send("Error registering new user please try again.");
//     } else {
//       res.status(200).send("Welcome to the club!");
//     }
//   });
// });

// POST Routes

// // user authentication route
// user.post("/sign-in", (req, res) => {
//   console.log("login");
//   User.findOne({ username: req.body.username }, (err, foundUser) => {
//     console.log(`${req.body.password} vs. ${foundUser.password}`);
//     if (req.body.password === foundUser.password) {
//       console.log("Password is correct!");
//       if (foundUser.category === "admin") {
//         console.log("admin!");
//         res.redirect("/main/admin");
//       } else {
//         console.log("Patient!");
//         // res.redirect("/home/student");
//         // res.render("../views/users/mainStudent.ejs", {
//         //   currentStudent: foundUser
//         // });
//         // const rLvl = foundUser.reading_level;
//         // console.log("redir lvl", rLvl);
//         const patientID = foundUser._id;
//         res.redirect(`/home/student/${patientID}`);
//       }
//     } else {
//       res.redirect("/home");
//     }
//   });
// });

//Update Route
user.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(400).json({ err: err.message });
      }
      res.status(200).json(updatedUser);
    }
  );
});

//Delete Route
user.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (error, deletedUser) => {
    if (error) {
      res.status(400).json({ error: error, message });
    }
    res.status(200).json(deletedUser);
  });
});

module.exports = user;
