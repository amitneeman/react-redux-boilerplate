var shell = require('shelljs');
shell.config.silent = true;

shell.exec('rm -rf ./git');

console.log('Removed the boilerplate git repo');