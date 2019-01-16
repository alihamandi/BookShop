const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.use(express.json());

router.get("/users", (req, res) => {
  User.find((err, result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("no books are available");
    }
  }).catch(err => {
    res.status(404).send(err);
  });
});

router.post("/register", (req, res) => {
  bcrypt.genSalt(10).then(salt => {
    bcrypt.hash(req.body.password, salt).then(hashed => {
      console.log("here");
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        age: req.body.age,
        name: req.body.name,
        email: req.body.email,
        password: hashed,
        kind: req.body.kind
      });
      user
        .save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.send(err);
        });
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(result => {
      bcrypt.compare(req.body.password, result.password, function(
        err,
        response
      ) {
        if (response) {
          let done = logged(result._id);
        res.send({text:"you are logged in " ,  token: done });
        } else {
          res.status(400).send("there is no such user try to register first");
        }
      });
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

function logged(id) {
  const create = jwt.sign({ _id: id }, "key");
  console.log(create);
  return create;
}

module.exports = router;
