const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from a file if it exists.  In a hosted
// environment (Render, Heroku, etc.) the variables will typically be
// injected at build/runtime by the platform, so the file may not be there.
function loadEnv() {
  const envPath = path.join(__dirname, '../config.env');
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  } else {
    // still attempt to load from default .env if present (no-op when
    // running in CI/Render where vars are provided externally)
    dotenv.config();
  }
}

// Determine which MongoDB connection string should be used.  The
// logic here mirrors what server.js used to do but is shared so that
// the various CLI scripts can re‑use the same behaviour.
function getDatabaseUrl() {
  let DB;

  if (process.env.NODE_ENV === 'development') {
    DB = process.env.DATABASE_LOCAL;
  } else {
    if (!process.env.DATABASE) {
      throw new Error('Missing DATABASE environment variable');
    }
    if (!process.env.DATABASE_PASSWORD) {
      throw new Error('Missing DATABASE_PASSWORD environment variable');
    }
    DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
  }

  if (!DB) {
    throw new Error('Database connection string is not defined.');
  }
  return DB;
}

module.exports = { loadEnv, getDatabaseUrl };