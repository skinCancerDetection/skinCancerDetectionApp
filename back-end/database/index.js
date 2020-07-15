const mongoose = require("mongoose");
const uri = "mongodb://localhost/users";
console.log(uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("We are connected");
});

module.exports = db;
