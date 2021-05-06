const fs = require('fs');

function checkFilePath(path) {
  if (!fs.existsSync(path)) {
    process.stderr.write('There is no such file!');
    process.exit(5);
  }
}

module.exports.checkFilePath = checkFilePath;
