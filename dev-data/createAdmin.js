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
