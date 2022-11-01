const signup_mongoose = require("mongoose");

let UserSignUp = signup_mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    phonenumber: { type: Number,
      },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = signup_mongoose.model("user_signups", UserSignUp);
