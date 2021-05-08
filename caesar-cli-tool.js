const { checkFiles } = require('./modules/check-files');
const { checkNecessaryParameters } = require('./modules/necessary-parameters');
const { getShift, getAction } = require('./modules/options');

checkNecessaryParameters('shift', getShift());
checkNecessaryParameters('action', getAction());

checkFiles();
