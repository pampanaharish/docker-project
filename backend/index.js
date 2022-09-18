const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || "localhost";
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log("Cors set to address", CORS_ADDRESS);

//const corsOption = { origin: "http://localhost:3000" };
const corsOption = { origin: CORS_ADDRESS };

app.use(cors(corsOption));
// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/test", cors(corsOption), (req, res) => {
  res.send("hello from simple TEST Express API server :)");
});

app.listen(PORT, () => {
  console.log(`> Server is up and running on port : ${PORT}`);
});
