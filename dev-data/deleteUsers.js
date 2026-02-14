const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./../models/userModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const deleteUsers = async () => {
  try {
    const result = await User.deleteMany({});
    console.log(`✅ Successfully deleted ${result.deletedCount} users from the database`);
    process.exit();
  } catch (error) {
    console.error('❌ Error deleting users:', error);
    process.exit(1);
  }
};

deleteUsers();
