const express = require("express");
const Post = require("../models/Post");

//Post
const newPost = async (req, res) => {

  try {

    const post = new Post({
      userId: req.body.userId,
      text: req.body.text,
      imagePath: req.file?.filename,
    });

    const savedPost = await post.save(); 

    res.status(201).json(savedPost);
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {

    try {

      const posts = await Post.find()
        .populate("userId", "name profilePic")
        .sort({ createdAt: -1 });
  
      res.status(200).json(posts);

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

module.exports = {newPost, getPosts};
