const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 4000);
app.use(express.static("public"));
app.use(cors());

// const db = require("../server/db");

const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
const serviceRoutes = require("./routes/getServices");
app.use("/", serviceRoutes);
const createRoutes = require("./routes/createservices");
app.use("/", createRoutes);
const deleteRoutes = require("./routes/deleteservices");
app.use("/", deleteRoutes);

app.get("/", function(req, res) {
  return res.redirect("/login");
});

var server = app.listen(app.get("port"), () => {
  console.log("Listening to port: ", app.get("port"));
});

// server.close(function(err) {
//   if (err) {
//     console.log(err);
//     //process.exit(1);
//   } else {
//     //process.exit(0);
//   }
// });
module.exports = server;
