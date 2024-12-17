const mongoose = require('mongoose');

const connectDB = async () => {
  const dbURI = 'mongodb://127.0.0.1:27017/one';  // Change to your MongoDB URI if different

  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = connectDB;
