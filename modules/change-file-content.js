const { pipeline } = require('stream');
const fs = require('fs');
// const { Transform } = require('stream');
// const { caesarCipher } = require('./caesar-cipher');
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
    // new Transform({
    //   objectMode: true,
    //   transform(chunk) {
    //     this.push(caesarCipher(chunk.toString(), shift, action));
    //   },
    // }),
    output,
    (err) => {
      if (err) {
        process.stderr.write('Pipeline failed.', err);
        process.exit(6);
      }
    },
  );
}

module.exports.changeFileContent = changeFileContent;
