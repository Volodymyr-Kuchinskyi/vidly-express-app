const mongoose = require("mongoose");

const Joi = require("joi");

const genreSchema = {
  name: { type: String, required: true, minlength: 5, maxlength: 50 }
};

const Genre = new mongoose.model("Genre", new mongoose.Schema(genreSchema));

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };
  return Joi.validate(genre, schema).error;
}

module.exports = { Genre, validate: validateGenre, genreSchema };
