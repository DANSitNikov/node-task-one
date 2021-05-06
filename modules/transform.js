const stream = require('stream');
const { caesarCipher } = require('./caesar-cipher');
const { getShift, getAction } = require('./options');

const transform = new stream.Transform({ objectMode: true });

transform._transform = (chunk, encoding, done) => {
  done(null, caesarCipher(chunk.toString(), getShift(), getAction()));
};

module.exports.transform = transform;
