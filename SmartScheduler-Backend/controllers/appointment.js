const express = require("express");
const appointment = express.Router();
const Appointment = require("../models/appointments.js");

//Index Route
appointment.get("/", (req, res) => {
  Appointment.find({}, (err, foundAppointments) => {
    if (err) {
      res.status(400).json({ err: err.message });
    }
    console.log(foundAppointments);
    res.status(200).json(foundAppointments);
  });
});

//Create Route
appointment.post("/", (req, res) => {
  Appointment.create(req.body, (err, createdAppointment) => {
    if (err) {
      res.status(400).json({ err: err.message });
    }
    res.status(200).json(createdAppointment);
  });
});

//Update Route
appointment.put("/:id", (req, res) => {
  Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedAppointment) => {
      if (err) {
        res.status(400).json({ err: err.message });
      }
      res.status(200).json(updatedAppointment);
    }
  );
});

//Delete Route
appointment.delete("/:id", (req, res) => {
  Appointment.findByIdAndRemove(req.params.id, (err, deletedAppointment) => {
    if (err) {
      res.status(400).json({ err: error, message });
    }
    res.status(200).json(deletedAppointment);
  });
});

module.exports = appointment;
