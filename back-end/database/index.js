const mongoose = require("mongoose");
const url = "mongodb://localhost/users";
const { MongoClient } = require("mongodb");

mongoose.connect(url, {
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

// //my db url
// const url = "mongodb+srv://smunawer:smunawer@skincancerdata.vymhw.gcp.mongodb.net/skinCancerData?retryWrites=true&w=majority"
// const client = new MongoClient(url);
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);
