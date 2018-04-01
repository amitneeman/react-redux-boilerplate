var shell = require('shelljs');
shell.config.silent = true;

var output = shell.exec('rm -rf .git');

if(output.stderr){
    console.log("failed to remove the old git repository: ");
    console.log(output.stderr);
    return;
}

console.log('Removed the boilerplate git repo');