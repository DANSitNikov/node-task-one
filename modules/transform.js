const { Transform } = require('stream');
const { caesarCipher } = require('./caesar-cipher');
const { getShift, getAction } = require('./options');

const transform = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    this.push(caesarCipher(chunk.toString(), getShift(), getAction()));
    callback();
  },
});

module.exports.transform = transform;
