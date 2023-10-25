const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/usersCtrl")


//* require the authorization middleware function

router.post("/", usersCtrl.create);


module.exports = router;