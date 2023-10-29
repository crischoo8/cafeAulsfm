const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const postSchema = new Schema(
    {
      title: {
        type: String,
        required: [true, "Please input Title"],
      },
      description: {
        type: String,
      },
      url: {
        type: String,
        trim: true,
      },

      tag: {
        type: String,
        trim: true,
      },

      imageURL: {
        type: String,
        required: [true, "Please provide a valid image url"],
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
      toJSON: {
        transform: function (_, ret) {
          delete ret.password;
          return ret;
        },
      },
    }
  );

  postSchema.virtual("s3ObjectID").get(function () {
    const deconstructedURL = this.imageURL.split("/");
    const s3ObjectID = deconstructedURL[deconstructedURL.length - 1];
    return s3ObjectID;
  });
  

  module.exports = model("Post", postSchema);
  