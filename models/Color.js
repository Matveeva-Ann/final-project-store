const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cssValue: {
      type: String
    },
    cssStyles: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);
const Color = mongoose.model("colors", ColorSchema);

module.exports = Color;
