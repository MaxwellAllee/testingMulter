const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoschema = new Schema({
  Photo: { type: String, required: true }
});

const photos = mongoose.model("photos", photoschema);

module.exports = photos;