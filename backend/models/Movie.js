const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1888,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
