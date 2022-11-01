const express = require("express");

const router = express.Router();

// const bcrypt = require('bcrypt');
// const randomize = require('randomatic');
// const mailservice = require('../services/mailService.js');

const UserInfoModel = require("../models/user_signup");
//const UserBookingModel = require('../models/userbookedtrips');

router.post("/signup", (req, res) => {
  const userobj = new UserInfoModel({
    username: req.body.username,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.body.password,
  });
  userobj
    .save()
    .then((inserteddocument) => {
      // mailservice.sendmail(req.body.empemail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION');
      res
        .status(200)
        .send(
          "DOCUMENT INSERTED IN MONGODB DATABASE" + "<br>" + inserteddocument
        );
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error in Employee Save " });
    });
});

router.post("/login", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  UserInfoModel.find({ email: req.body.email, password: req.body.password })
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      } else {
        return res
          .status(404)
          .send({ message: "Note not found with id " + req.params.userid });
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({
          message:
            "DB Problem..Error in Retriving with id " + req.params.userid,
        });
    });
});
router.delete("/remove/:emailid", (req, res) => {
  UserInfoModel.findOneAndRemove({ email: req.params.emailid })
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
      return res
        .status(500)
        .send({
          message: "DB Problem..Error in Delete with id " + req.params.emailid,
        });
    });
});
router.get("/search/:emailid", (req, res) => {
  UserInfoModel.find({ email: req.params.emailid })
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
      return res
        .status(500)
        .send({
          message:
            "DB Problem..Error in Retriving with id " + req.params.emailid,
        });
    });
});
router.get("/viewall", (req, res) => {
  UserInfoModel.find()
    .then((getalldocumentsfrommongodb) => {
      res.status(200).send(getalldocumentsfrommongodb);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error in Fetch Employee " });
    });
});
// router.post('/hotelbooking', (req, res) => {

//       const hotelbookingobj = new  UserBookingModel({

//         username: req.body.username,
//         email: req.body.email,
//         phonenumber: req.body.phonenumber,
//         check_in: req.body.check_in,
//         check_out: req.body.check_out,
//         rooms: req.body.rooms
//       });
//       hotelbookingobj.save()
//       .then(inserteddocument => {
//         res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
//       })
//       .catch(err => {
//         res.status(500).send({ message: err.message || 'Error in Employee Save ' })
//       });
//   }
//   );
router.put("/update", (req, res) => {
  UserInfoModel.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: { phonenumber: req.body.phonenumber, password: req.body.password, password: req.body.password },
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

module.exports = router;
