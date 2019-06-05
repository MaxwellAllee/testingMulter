const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoschema = new Schema({
  photos: { data: Buffer, contentType: String }
});

const photos = mongoose.model("photos", photoschema);

module.exports = photos;