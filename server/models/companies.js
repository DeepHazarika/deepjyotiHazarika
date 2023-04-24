const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String },
  url: { type: String, required: true },
});

const companies = mongoose.model("companies", CompanySchema);
module.exports = companies;
