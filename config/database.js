const mongoose = require("mongoose");
// const debug = require("debug")("nextfit:config:database");

// mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});