const Post = require("../models/postModel");
const debug = require("debug")("cafeaulsfm:controllers:postsCtrl");
const sendResponse = require("../config/sendResponseHelper");

const AWS_S3_OBJECT_URL = process.env.AWS_S3_OBJECT_URL;

function uploadImg(req, res) {
  debug("files received: %o", req.files);
  const { files } = req;
  const imgURLs = files.map((file) => {
    return `${AWS_S3_OBJECT_URL}/${file.processedImage.key}`;
  });
  debug("image converted to url:", imgURLs);
  res
    .status(201)
    .json({ message: "Image successfully uploaded to S3", imageURLs: imgURLs });
}

async function create(req, res) {
  debug("req.body: %o", req.body);
  const { title, description, url, tag } = req.body;
  const postInfo = { title, description, url, tag };
  try {
    const newPost = await Post.create({
      ...postInfo,
      imageURL: req.body.images,
      user: req.user._id,
    });
    sendResponse(res, 201, {
      post: newPost,
    });
  } catch (err) {
    debug("Error saving: %o", err);
    if (err.name === "ValidationError") {
      const errors = {};
      debug("Error saving errors:", err.errors);
      for (const field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      const errorMessage = Object.keys(errors)[0];
      return sendResponse(res, 400, null, errors[errorMessage]);
    }
    sendResponse(res, 500, null, "Error saving post");
  }
}

async function getAll(req, res) {
  debug("see req.user: %o", req.user);
  try {
    const post = await Post.find({ user: req.user._id });
    debug("found posts by user: %o", post);
    sendResponse(res, 200, { post });
  } catch (err) {
    sendResponse(res, 500, null, "Error getting all posts");
  }
}

async function del(req, res) {
  debug("see req.params: %o", req.params);
  try {
    // this chunk is from NextFit and deletes related outfits that have a particular piece in it
    // will return null if cannot findOne
    // const category = req.params.main;
    // if (category === "Top") {
    //   await Outfit.deleteMany({ "apparels.top": req.params.postID });
    // } else if (category === "Bottom") {
    //   await Outfit.deleteMany({
    //     "apparels.bottom": req.params.postID,
    //   });
    // }

    const post = await Post.findOneAndDelete({
    // NEED to edit 
      _id: req.params.postID,
      user: req.user._id,
    });
    debug("delete post by user: %o", post);
    sendResponse(res, 200);
  } catch (err) {
    sendResponse(res, 500, null, "Error deleting post");
  }
}

async function updateOne(req, res) {
  debug("see req.user: %o", req.user);
  try {
    const updatedPost = await Post.findByIdAndUpdate(
        // sth to do w useParams?
        // NEED to edit 
      { _id: req.params.postID },
      {
        mainCategory: req.body.mainCategory,
        subCategory: req.body.subCategory,
        fit: req.body.fit,
        wornFrequency: 0,
        imageURL: req.body.images,
        user: req.user._id,
      },
      { new: true }
    );
    debug("found post by user: %o", updatedPost);
    sendResponse(res, 200, { post: updatedPost });
  } catch (err) {
    debug("Error saving: %o", err);
    if (err.name === "ValidationError") {
      const errors = {};
      debug("Error saving errors:", err.errors);
      for (const field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      const errorMessage = Object.keys(errors)[0];
      return sendResponse(res, 400, null, errors[errorMessage]);
    }
    sendResponse(res, 500, null, "Error editing post");
  }
}

module.exports = { uploadImg, create, getAll, del, updateOne };