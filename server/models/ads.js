const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  companyId: { type: Number, required: true },
  primaryText: { type: String },
  headline: { type: String },
  description: { type: String },
  CTA: { type: String },
  imageUrl: { type: String, required: true },
});

const ads = mongoose.model("ads", AdsSchema);
module.exports = ads;
