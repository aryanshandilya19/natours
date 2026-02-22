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

const createAdmin = async () => {
  try {
    const adminUser = await User.create({
      name: 'Aryan Shandilya',
      email: 'admin@natours.io',
      password: 'test1234',
      passwordConfirm: 'test1234',
      role: 'admin'
    });

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@natours.io');
    console.log('🔑 Password: test1234');
    console.log('👤 Name: Aryan Shandilya');
    console.log('⚙️  Role: admin');
    process.exit();
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
