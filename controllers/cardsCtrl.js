const Post = require("../models/postModel");
const Card = require("../models/cardModel");
const debug = require("debug")("cafeaulsfm:controllers:cardsCtrl");
const sendResponse = require("../config/sendResponseHelper");

async function create(req, res) {
  debug("req.body: %o", req.body);
  const { title, description, url } = req.body;
  const cardInfo = { title, description, url };
  try {
    const newCard = await Card.create({
      ...cardInfo,
      user: req.user._id,
    });
    sendResponse(res, 201, {
      card: newCard,
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
    const card = await Card.find({ user: req.user._id });
    debug("found cards by user: %o", card);
    sendResponse(res, 200, { card });
  } catch (err) {
    sendResponse(res, 500, null, "Error getting all posts");
  }
}

async function del(req, res) {
  debug("see req.params: %o", req.params);
  try {
    const card = await Card.findOneAndDelete({
      // NEED to edit
      _id: req.params.bucketlistItemID,
      user: req.user._id,
    });
    debug("delete post by user: %o", post);
    sendResponse(res, 200);
  } catch (err) {
    sendResponse(res, 500, null, "Error deleting post");
  }
}

// update function is now functional!

async function updateOne(req, res) {
  debug("see req.user: %o", req.user);
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      // sth to do w useParams?
      // NEED to edit
      { _id: req.params.bucketlistItemID },
      {
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        user: req.user._id,
      },
      { new: true }
    );
    debug("found card by user: %o", updatedCard);
    sendResponse(res, 200, { card: updatedCard });
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

    async function createCardFromPost(req, res) {
        try {
            const postID = req.params.postID;
            const post = await Post.findById(postID);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
              }

            const cardData = {
                title: post.title,
                description: post.description,
                url: post.url,
            }

            const card = await Card.create(cardData);
            res.status(201).json({ card });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while creating the card' });
        }
    }
module.exports = { create, getAll, del, updateOne, createCardFromPost };
