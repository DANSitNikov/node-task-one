// const fs = require('fs');
const { program } = require('commander');
const func = require('./modules/ceasar-sipher');

program.version('1.0.0');

program
  .option('-s, --shift <type>')
  .option('-i, --input <type>')
  .option('-o, --output <type>')
  .option('-a, --action <type>')
  .parse();

program.parse(process.argv);

const options = program.opts();
const shiftRes = options.shift;
const
console.log(func('ala', shiftRes, 'encode'));
console.log(shiftRes);
// if (options.shift) console.log(`${options.shift}`);
console.log('pizza details:');
if (options.input) console.log(`${options.input}`);
if (options.output) console.log(`- ${options.output}`);
