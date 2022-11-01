const express = require("express");
const router = express.Router();
const UserDetailsModel = require("../models/userbookedtrips");

router.post("/hotelbooking", (req, res) => {
  const userbookobj = new UserDetailsModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    checkindate: req.body.checkindate,
    numberofdays: req.body.numberofdays,
  });
  userbookobj
    .save()
    .then((inserteddocument) => {
      // mailservice.sendmail(req.body.empemail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION');
      res
        .status(200)
        .send(
          "DOCUMENT " + "<br>" + inserteddocument
        );
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error in Employee Save " });
    });
});

router.get("/", (req, res) => {
  UserDetailsModel.find()
    .then((getalldocumentsfrommongodb) => {
      res.status(200).send(getalldocumentsfrommongodb);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error in Fetch Employee " });
    });
});

router.put("/update", (req, res) => {
  UserDetailsModel.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: {
        phonenumber: req.body.phonenumber,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        checkindate: req.body.checkindate,
        numberofdays: req.body.numberofdays,
      },
    },
    { new: true }
  )
    .then((getupdateddocument) => {
      if (getupdateddocument != null)
        res.status(200).send("DOCUMENT UPDATED " + getupdateddocument);
      else res.status(404).send("INVALID EMAILID " + req.body.email);
    })
    .catch((err) => {
      return res.status(500).send({ message: "DB Problem" });
    });
});

router.get("/search/:emailid", (req, res) => {
  UserDetailsModel.find({ email: req.params.emailid })
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      } else {
        return res
          .status(404)
          .send({ message: "Note not found with id " + req.params.emailid });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Retriving with id " + req.params.emailid,
      });
    });
});

router.delete("/remove/:emailid", (req, res) => {
  UserDetailsModel.findOneAndRemove({ email: req.params.emailid })
    .then((deleteddocument) => {
      if (deleteddocument != null) {
        res
          .status(200)
          .send("DOCUMENT DELETED successfully!" + deleteddocument);
      } else {
        res.status(404).send("INVALID USER email " + req.params.emailid);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Delete with id " + req.params.emailid,
      });
    });
});

module.exports = router;
