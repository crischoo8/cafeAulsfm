const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/postsCtrl");
const { uploadToS3, deleteFromS3 } = require("../config/s3Middlewares");

router.get("/", postCtrl.getAll);
router.post("/new/upload", uploadToS3, postCtrl.uploadImg);
router.post("/new", postCtrl.create);
router.delete("/:postID", deleteFromS3, postCtrl.del);
router.put("/:postID/edit", postCtrl.updateOne);


module.exports = router;