const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const project = new Project({
    user: req.user._id,
    name,
    description,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

module.exports = { createProject };

