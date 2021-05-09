const { changeFileContent } = require('./change-file-content');
const { checkFilePath, checkIsEqualPaths } = require('./check-file-path');
const {
  getShift, getAction, getInput, getOutput,
} = require('./options');

function checkFiles() {
  const inputPath = getInput();
  const outputPath = getOutput();
  const shift = getShift();
  const action = getAction();

  checkIsEqualPaths();

  if (inputPath && outputPath) {
    checkFilePath(inputPath);
    checkFilePath(outputPath);
    changeFileContent(inputPath, outputPath, shift, action);
  } else if (inputPath && outputPath === undefined) {
    checkFilePath(inputPath);
    changeFileContent(inputPath, '', shift, action);
  } else if (inputPath === undefined && outputPath) {
    checkFilePath(outputPath);
    changeFileContent('', outputPath, shift, action);
  } else {
    changeFileContent('', '', shift, action);
  }
}

module.exports.checkFiles = checkFiles;
