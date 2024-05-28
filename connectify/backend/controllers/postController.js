const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');

// @desc    Create a post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  const post = new Post({
    user: req.user._id,
    content,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

module.exports = { createPost };
