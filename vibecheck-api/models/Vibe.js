const mongoose = require("mongoose");

const VibeSchema = new mongoose.Schema({
  vibeText: {
    type: String,
    required: true,
  },
  musicLink: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Vibe", VibeSchema);
