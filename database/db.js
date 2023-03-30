const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const USERNAME = 'nikhildev17911';
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;

const mongoAtlasUri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.3mk4bue.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoAtlasUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database Connected!...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
