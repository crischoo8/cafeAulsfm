const User = require("../models/userModel");
const Post = require("../models/postModel");
const Card = require("../models/cardModel");
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


async function login(req, res) {
    debug("login user body: %o", req.body);
    try {
      const user = await User.findOne({ username: req.body.username });
      debug("user", user);
      if (user === null) throw new Error("User does not exist.");
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error("Incorrect password!");
      const token = createJWT(user);
      sendResponse(res, 200, { token: token });
    } catch (err) {
      debug("Error creating: %o", err);
      let status = 401;
      let message = "Unauthorised";
  
      if (err.message === "User does not exist.") {
        status = 404;
        message = err.message;
      }
      if (err.message === "Incorrect password!") {
        status = 401;
        message = err.message;
      }
      sendResponse(res, status, null, message);
    }
  }

    async function deactivate(req, res) {
        debug("delete user: %o", req.user._id);
        try {
        await User.findOneAndDelete({
            _id: req.user._id,
        });
        await Post.deleteMany({
            user: req.user._id,
        });
        await Card.deleteMany({
            user: req.user._id,
        });
        sendResponse(res, 200);
        } catch (err) {
        sendResponse(res, 500, null, "Error deleting account");
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


  module.exports = { create, login, deactivate };