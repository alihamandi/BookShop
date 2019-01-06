const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/user");
const books = require("./routes/book");
var cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 3000;

mongoose.connect(
  "mongodb://hamandi:1234ab@ds061454.mlab.com:61454/book-shop",
  { useNewUrlParser: true }
);

mongoose.connection.on("connected", () => {
  console.log("mongo has been connected");
});

mongoose.connection.on("error", err => {
  console.log(err);
});

app.use(express.json());
app.use("/", users);
app.use("/", books);

app.get("/", (req, res) => {
  res.send("welcome to my app");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
