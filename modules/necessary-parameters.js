function checkNecessaryParameters(parameter, value) {
  switch (parameter) {
    case 'action':
      if (!value) {
        process.stderr.write('Action parameter is necessary');
        process.exit(1);
      } else if (value !== 'encode' && value !== 'decode') {
        process.stderr.write(`Expected "encode" or "decode" but got "${value}"`);
        process.exit(2);
      }
      break;
    case 'shift':
      if (!value) {
        process.stderr.write('Shift parameter is necessary');
        process.exit(3);
      } else if (Number.isNaN(Number(value))) {
        process.stderr.write('Shift parameter must be a number');
        process.exit(4);
      } else if (Number(value) % 1 !== 0) {
        process.stderr.write('Shift parameter must be an integer');
        process.exit(5);
      }
      break;
    default:
      return 'No errors';
  }

  return 'No errors';
}

module.exports.checkNecessaryParameters = checkNecessaryParameters;
