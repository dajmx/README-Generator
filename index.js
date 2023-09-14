// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require ('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is your projects name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: "nmp install"
  },
  {
      type: 'input',
      name: 'test',
      message: 'What command should be run to install dependencies?',
      default: 'npm test'
    },
];


    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)}
// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((inquirerResponses)=>{console.log('Generating README...');
  writeToFile('README.md',generateMarkdown({...inquirerResponses}))
});
}

// Function call to initialize app
init();
