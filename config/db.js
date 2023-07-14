const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://user-123:karma123@cluster0.p4fj6gd.mongodb.net/',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
