const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
  {
    nickName: {
      type: String,
      default: 'Nikhil',
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;
