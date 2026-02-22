const mongoose = require('mongoose');
const User = require('./../models/userModel');
const fs = require('fs');
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

const importUsers = async () => {
  try {
    const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`, 'utf-8'));

    // Skip the first user (admin) as it's already created
    const usersToImport = users.slice(1);

    // Use insertMany with validation bypassed
    const result = await User.collection.insertMany(usersToImport);
    console.log(`✅ Successfully imported ${usersToImport.length} users to the database`);
    console.log('\n📋 Users imported:');
    usersToImport.forEach(user => {
      console.log(`   • ${user.name} (${user.email}) - Role: ${user.role}`);
    });
    process.exit();
  } catch (error) {
    console.error('❌ Error importing users:', error.message);
    process.exit(1);
  }
};

importUsers();
