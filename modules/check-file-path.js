const fs = require('fs');
const { getOutput } = require('./options');
const { getInput } = require('./options');

function checkFilePath(path) {
  if (!fs.existsSync(path)) {
    process.stderr.write('There is no such file!');
    process.exit(6);
  }
}

function checkIsEqualPaths() {
  if (getInput() === getOutput() && getInput()) {
    process.stderr.write('It should be different file!');
    process.exit(7);
  }
}

module.exports = {
  checkFilePath,
  checkIsEqualPaths,
};
