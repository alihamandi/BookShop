const express = require("express");
const router = express.Router();
const joi = require("joi");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Book = require("../models/book");

router.use(express.json());

router.get("/books", (req, res) => {
  checker(req, res);
  Book.find((err, result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("no books are available");
    }
  }).catch(err => {
    res.status(404).send(err);
  });
});

router.get("/booksN", (req, res) => {
  console.log("here get");

  Book.find((err, result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("no books avalable");
    }
  }).catch(err => {
    res.status(404).send(err);
  });
});

router.post("/upload", (req, res) => {
  checker(req, res);
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    des: req.body.des,
    cover: req.body.cover,
    dlink: req.body.dlink
  });

  book
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

function checker(req, res, next) {
  const token = req.headers.token;
  if (token) {
    try {
      let payload = jwt.verify(token, "key");
      return;
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(404).send("please log in first");
  }
}

module.exports = router;
