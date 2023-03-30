const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const connectDB = require('./database/db');
const {
  register,
  login,
  addProject,
  projectList,
  deleteProject,
  addSkills,
  deleteSkills,
  skillsList,
} = require('./controller/admin');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json({ limit: '100mb', extended: true }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

const server = http.createServer(app);
connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT} in ${NODE_ENV} mode!..`);
});
app.post('/api/register', register);
app.post('/api/login', login);
app.post('/api/add-project', addProject);
app.get('/api/project-list', projectList);
app.post('/api/delete-project', deleteProject);
app.post('/api/add-skills', addSkills);
app.post('/api/delete-skills', deleteSkills);
app.get('/api/get-skills', skillsList);
server.listen(
  PORT,
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode!..`)
);
