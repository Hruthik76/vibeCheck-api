const express = require("express");
const router = express.Router();
const Vibe = require("../models/Vibe");
const protect = require("../middleware/auth");

router.post("/", protect, async (req, res) => {
  const { vibeText, musicLink } = req.body;
  try {
    const vibe = await Vibe.create({
      vibeText,
      musicLink,
      user: req.user._id,
    });
    res.status(201).json(vibe);
  } catch (err) {
    res.status(500).json({ message: "Could not post vibe" });
  }
});

router.get("/", async (req, res) => {
  try {
    const vibes = await Vibe.find().populate("user", "username");
    res.json(vibes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching vibes" });
  }
});

module.exports = router;
