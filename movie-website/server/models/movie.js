const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: Number,
      min: 1.0,
      required: true,
    },
    genre1: {
      type: String,
      lowercase: false,
      required: true,
    },
    genre2: {
      type: String,
      lowercase: false,
    },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema, "movies");

module.exports = Movie;
