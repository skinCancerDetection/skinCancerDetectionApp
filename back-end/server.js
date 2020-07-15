const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./database/index");

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
