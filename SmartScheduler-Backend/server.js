// Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const appointmentController = require("./controllers/appointment.js");
const userController = require("./controllers/users.js");
const sessionController = require("./controllers/session.js");
const mongodbURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/patientDB";

//==============================
//     MONGOOSE CONNECTION
//==============================
// ERROR
mongoose.connection.on("error", error =>
  console.log(error.message + " is Mongod not running?")
);

// DISCONNECTED
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// CONNECT
mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
// CONNECTED
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

const whitelist = [
  "http://localhost:3000",
  "http://medicalendar-app.surge.sh",
  "https://medicalendar-app.surge.sh"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  }
};

//Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));

// controllers
app.use("/appointment", appointmentController);
app.use("/user", userController);
app.use("/session", sessionController);

app.listen(PORT, () => {
  console.log("listening");
});
