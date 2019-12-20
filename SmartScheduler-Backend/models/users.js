const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dob: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone: { type: String, require: true },
  category: { type: String, default: "patient" },
  appointments: []
});

// userSchema.pre("save", function(next) {
//   // Check if document is new or a new password has been set
//   if (this.isNew || this.isModified("password")) {
//     // Saving reference to this because of changing scopes
//     const document = this;
//     bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
//       if (err) {
//         next(err);
//       } else {
//         document.password = hashedPassword;
//         next();
//       }
//     });
//   } else {
//     next();
//   }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

const User = mongoose.model("User", userSchema);
module.exports = User;
