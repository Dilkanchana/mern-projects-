const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({}).populate('user', 'name email');
  res.json(messages);
});

// @desc    Send a message
// @route   POST /api/messages
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {
  const { content } = req.body;

  const message = new Message({
    user: req.user._id,
    content,
  });

  const createdMessage = await message.save();
  res.status(201).json(createdMessage);
});

module.exports = { getMessages, sendMessage };

