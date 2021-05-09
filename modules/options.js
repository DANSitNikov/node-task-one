const { program } = require('commander');

program.version('1.0.0');

program
  .option('-s, --shift [type]')
  .option('-i, --input [type]')
  .option('-o, --output [type]')
  .option('-a, --action [type]')
  .parse();

const options = program.opts();
const {
  shift, action, input, output,
} = options;

function getShift() {
  return shift;
}

function getAction() {
  return action;
}

function getInput() {
  return input;
}

function getOutput() {
  return output;
}

module.exports = {
  getShift,
  getInput,
  getAction,
  getOutput,
};
