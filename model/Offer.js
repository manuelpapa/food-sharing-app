const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  category: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  category_name: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  location: {
    name: String,
    street: String,
    zip: String,
    city: String,
  },
  tags: [String],
  reserved_by: {
    type: String,
  },
  created_by: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Offer", offerSchema);
