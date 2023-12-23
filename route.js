const express = require("express");
const router = express.Router();
const Portfolio = require("./model");
router.post("/", async (req, res) => {
  try {
    const { id, imageURL } = req.body;
    const portfolioItem = new Portfolio({ id, imageURL });
    const savedPortfolioItem = await portfolioItem.save();
    res.json(savedPortfolioItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);
    res.json(portfolioItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id, imageURL } = req.body;
    const updatedPortfolioItem = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { id, imageURL },
      { new: true }
    );
    res.json(updatedPortfolioItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedPortfolioItem = await Portfolio.findByIdAndDelete(
      req.params.id
    );
    res.json(deletedPortfolioItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
