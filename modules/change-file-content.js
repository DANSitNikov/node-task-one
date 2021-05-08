const { pipeline } = require('stream');
const fs = require('fs');
const { transform } = require('./transform');

function changeFileContent(inputPath, outputPath) {
  let input;
  let output;

  if (inputPath) {
    input = fs.createReadStream(inputPath);
  } else {
    input = process.stdin;
  }

  if (outputPath) {
    output = fs.createWriteStream(outputPath, {
      flags: 'a',
    });
  } else {
    output = process.stdout;
  }

  pipeline(
    input,
    transform,
    output,
    (err) => {
      if (err) {
        process.stderr.write('Pipeline failed.', err);
        process.exit(7);
      }
    },
  );
}

module.exports.changeFileContent = changeFileContent;
