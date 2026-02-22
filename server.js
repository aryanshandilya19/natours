process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const mongoose = require('mongoose');

// load environment variables and provide helpers for the DB URL
const { loadEnv, getDatabaseUrl } = require('./utils/config');

loadEnv();
const app = require('./app');

// build connection string depending on environment
let DB;
try {
  DB = getDatabaseUrl();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

// helper to perform connection with optional fallback
async function connectDB() {
  try {
    await mongoose.connect(DB);
    console.log('DB connection successful!');
  } catch (err) {
    console.error('DB connection error:', err.message);
    // if we were trying local and a remote url exists, try that as a fallback
    if (
      process.env.NODE_ENV === 'development' &&
      process.env.DATABASE &&
      DB === process.env.DATABASE_LOCAL
    ) {
      try {
        const remote = process.env.DATABASE.replace(
          '<PASSWORD>',
          process.env.DATABASE_PASSWORD
        );
        console.log('Attempting remote database connection as fallback...');
        await mongoose.connect(remote);
        console.log('Connected to remote DB');
        return;
      } catch (err2) {
        console.error('Remote fallback failed:', err2.message);
      }
    }
    process.exit(1);
  }
}

connectDB();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});
// server is already started above. Do not call app.listen again.
