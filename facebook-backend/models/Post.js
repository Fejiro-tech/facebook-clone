 const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: false,
    },
    
    text: {
      type: String,
      required: true,
    },

    imagePath: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", userSchema);
