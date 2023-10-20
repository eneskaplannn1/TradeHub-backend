const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    // console.log(process.env.DATABASE);
    await mongoose.connect(process.env.DATABASE).then(() => {});
    console.log('Connected to the Database');
  } catch (error) {
    console.log(err.name);
    console.log(err.message);
    console.error('Database connection error:', error);
  }
};

module.exports = connectToDatabase;
