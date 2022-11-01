const bookedtripdetails_mongoose = require("mongoose");

const UserBookingDetails = bookedtripdetails_mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
    phonenumber: { type: Number },
    email: { type: String },
    checkindate: { type: Date },
    numberofdays: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = bookedtripdetails_mongoose.model(
  "adminbookedtrips",
  UserBookingDetails
);
