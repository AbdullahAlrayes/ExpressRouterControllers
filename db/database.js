const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://dbuser:123Coded@test.hleyf.mongodb.net/test',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};
module.exports = connectDB;
