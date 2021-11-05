const getFlagModule = require('./exportGetFlag');

const argumentos = process.argv;
console.log(process.argv);

console.log(getFlagModule('--name',argumentos));
console.log(getFlagModule('--greeting',argumentos));
