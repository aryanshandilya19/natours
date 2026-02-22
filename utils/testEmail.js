/* Simple test script to send an email using the existing Email class.
   Usage:
     1. Add your Mailtrap credentials to config.env (EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_FROM).
     2. Run: node utils/testEmail.js
*/

const { loadEnv } = require('./config');
loadEnv();
const Email = require('./email');

(async () => {
  const user = { email: 'test@example.com', name: 'Test User' };
  const url = 'http://localhost:3000';

  const email = new Email(user, url);
  try {
    await email.sendWelcome();
    // eslint-disable-next-line no-console
    console.log('Test email sent (check Mailtrap inbox)');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error sending test email:', err.message || err);
    process.exit(1);
  }
})();
