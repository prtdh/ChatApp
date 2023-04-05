//importing dependencies
const express = require("express");
const dotenv = require("dotenv");

//using dependencies
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is listening on Port ${PORT}`));
