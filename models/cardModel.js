// for BucketListCard
const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const cardSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        url: {
            type: String,
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

module.exports = model("Card", cardSchema);