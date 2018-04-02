var shell = require('shelljs');
shell.config.silent = true;

var componentName = process.argv[2];
componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

var componentDirectoryPath = './src/containers/' + componentName.toLowerCase() + '/';
var templatesPath = './internals/templates/'; 
var nameInTemplateFiles = 'COMPONENT_NAME';

// create the directory
var output = shell.exec('mkdir ' + componentDirectoryPath);

if(output.stderr){
    console.log("Failed creating the component with the following error:");
    console.log(output.stderr);
    return;
}

// create the files
var jsFileName = componentName + ".js";
var cssFileName = componentName + ".styles.js";
var testFileName = componentName + ".test.js";

// copy template files
shell.cp(templatesPath + 'container.js', componentDirectoryPath + jsFileName);
shell.cp(templatesPath + 'component.styles.js', componentDirectoryPath + cssFileName);
shell.cp(templatesPath + 'component.test.js', componentDirectoryPath + testFileName);

// apply templating
shell.exec("sed -i '' -e s/COMPONENT_NAME/" + componentName + '/g ' + componentDirectoryPath + '*');

console.log('Created the container successfuly')