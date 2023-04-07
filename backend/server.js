//importing dependencies
const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const userRoute = require("./routes/userRoutes");
//using dependencies
const app = express();
dotenv.config();
const port = process.env.PORT || 4002;
const connectDB = require("./config/db");
app.use(express.json());
app.use("/api/user", userRoute);
//responses and requests

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
module.exports = app;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(4000, console.log(`app is listening on the 4000`));
  } catch (error) {
    console.log(error);
  }
};
start();
