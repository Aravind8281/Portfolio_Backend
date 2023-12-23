const mongoose = require("mongoose");
const portfolioSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  imageURL: { type: String, required: true },
});
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
