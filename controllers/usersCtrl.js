const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendResponse = require("../config/sendResponseHelper");
const debug = require("debug")("cafeaulsfm:controllers:usersCtrl");

async function create(req, res) {
    try {
        const newUser = await User.create(req.body);
        debug("created new user: %o", req.body);
        const token = createJWT(newUser);
        sendResponse(res, 201, {token: token});
    } catch (err) {
        debug("Error creating: %o", err);
    // also use sendResponseHelper here, from NextFit code
        let status = 500;
        let message = "Internal Server Error";

    if (err.name === "ValidationError") {
      if (err.errors.password.kind === "minlength") {
        status = 400;
        message = "Password is too short. Please input at least 8 characters";
      }
    }
    if (err.code === 11000 && err.keyValue.username) {
      status = 409;
      message = "Username already exists.";
    } else if (err.code === 11000 && err.keyValue.email) {
      status = 409;
      message = "Email already exists.";
    }

    sendResponse(res, status, null, message);
    }
}






/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: "24h" }
    );
  }


  module.exports = { create };