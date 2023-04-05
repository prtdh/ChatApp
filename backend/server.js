//importing dependencies
const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
//using dependencies
const app = express();
dotenv.config();
const port = process.env.PORT || 4002;

//responses and requests

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
console.log(chats);
module.exports = app;
app.listen(4002, console.log(`Server is listening on Port ${port}`));
