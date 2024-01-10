const os = require('os');
const fs = require('fs');
const path = require('path');

const HOME = os.homedir();

fs.writeFile('.env', `DATABASE_URL=file:${path.resolve(HOME, '.mockya/mockya.db')}`, (err) => {
  if (err) {
    process.exit(1);
  }
});
