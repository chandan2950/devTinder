const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://chandanpal1822:chandan456@workout.myvqq.mongodb.net/devTinder"
  );
};

module.exports = connectDB;


