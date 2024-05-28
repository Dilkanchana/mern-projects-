const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  tasks: [
    {
      name: { type: String, required: true },
      status: { type: String, required: true, enum: ['Pending', 'Completed'], default: 'Pending' },
      dueDate: { type: Date },
    },
  ],
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;

