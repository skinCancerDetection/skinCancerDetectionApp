const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongo = require("./database/index");
const db = require("./database/models");
const auth = require("./routes/auth")
const doctors = require("./routes/doctor")

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("I am here");
  res.send("Welcome!");
});

app.use("/api/users/", doctors);
app.use("/api/user", auth);
// app.use("/api/profile", patientupdate)

app.listen(port, () => console.log(`Server started on port: ${port}`));
