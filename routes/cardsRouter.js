const express = require("express");
const router = express.Router();
const cardCtrl = require("../controllers/cardsCtrl");


router.get("/", cardCtrl.getAll);
// router.post("/new/upload", uploadToS3, postCtrl.uploadImg);
router.post("/new", cardCtrl.create);
router.delete("/:bucketlistItemID", cardCtrl.del);
router.put("/:bucketlistItemID/edit", cardCtrl.updateOne);
router.post("/cardFromPost/:postID", cardCtrl.createCardFromPost);

module.exports = router;