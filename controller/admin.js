const asyncHandler = require('express-async-handler');
const Admin = require('../model/admin_model');
const Project = require('../model/project_model');
const Skill = require('../model/skil_model');

module.exports = {
  register: asyncHandler(async (req, res) => {
    const { nickName, username, password } = req.body;
    const data = await Admin.insertMany([{ nickName, username, password }]);
    if (data) {
      res.json(data).status(200);
    } else {
      res
        .json({ message: 'Something went wrong. Please try again!...' })
        .status(400);
    }
  }),

  login: asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const data = await Admin.findOne({ username, password }).exec();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: 'Invaild username or password' });
    }
  }),

  addProject: asyncHandler(async (req, res) => {
    const { projectName, image, gitLink, liveLink } = req.body;
    const projects = await Project.find().exec();
    const data = await Project.insertMany([
      {
        id: projects.length + 1,
        name: projectName,
        image,
        github: gitLink,
        live: liveLink,
      },
    ]);
    if (data) {
      res
        .status(200)
        .json({ status: true, message: 'Successfully Added Project!...' });
    } else {
      res.status(400).json({ status: false, message: 'Project Added Failed' });
    }
  }),

  projectList: asyncHandler(async (req, res) => {
    const data = await Project.find().exec();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: 'not found' });
    }
  }),

  deleteProject: asyncHandler(async (req, res) => {
    const { id } = req.body;
    const data = await Project.deleteOne({ _id: id }).exec();
    if (data.acknowledged) {
      res.status(200).json({ message: 'Successfully Deleted' });
    } else {
      res.status(400).json({ message: 'Something Went worng!...' });
    }
  }),

  addSkills: asyncHandler(async (req, res) => {
    const { name, image } = req.body;
    const data = Skill.insertMany([{ name, image }]);
    if (data) {
      res.json(data).status(200);
    } else {
      res.status(400).json('Something went wrong');
    }
  }),

  deleteSkills: asyncHandler(async (req, res) => {
    const { id } = req.body;
    const data = Skill.deleteOne({ _id: id }).exec();
    if (data.acknowledged) {
      res.status(200).json(data);
    } else {
      res.status(400).json('Something went wrong');
    }
  }),

  skillsList: asyncHandler(async (req, res) => {
    const data = await Skill.find().exec();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json('Not found');
    }
  }),
};
