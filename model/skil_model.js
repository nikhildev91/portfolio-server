const mongoose = require('mongoose');

const skillSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
