const express = require("express");
const router = express.Router();
const multer = require("multer");
const { newPost, getPosts} = require("../controllers/postController");
const Post = require("../models/Post");
// const upload = require("../uploads")

const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // store in uploads/ folder
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });


router.post("/", upload.single("image"), newPost);

router.get("/", getPosts);

router.get("/image/:id", async (req, res) => {

    try {

      const post = await Post.findById(req.params.id);
      if (!post || !post.imagePath) return res.status(404).send("Not found");
  
      const imagePath = path.join(__dirname, "..", "uploads", post.imagePath);
      if (!fs.existsSync(imagePath)) return res.status(404).send("File not found");
  
      res.sendFile(imagePath);

    } catch (err) {

      res.status(500).json({ error: err.message });
    }
  });

module.exports = router