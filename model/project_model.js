const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;