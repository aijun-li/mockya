const os = require('os');
const fs = require('fs');

const HOME = os.homedir();

fs.writeFile('.env', `DATABASE_URL=file:${HOME}/.mockya/mockya.db`, (err) => {
  if (err) {
    process.exit(1);
  }
});
