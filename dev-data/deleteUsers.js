const mongoose = require('mongoose');
const User = require('./../models/userModel');
const { loadEnv, getDatabaseUrl } = require('../utils/config');

loadEnv();
const DB = getDatabaseUrl();

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.error('DB connection error:', err.message);
    process.exit(1);
  });

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
