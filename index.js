// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What kind of license should your project have? (Use arrow keys)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If contributing is allowed, how does one contribute to the repo?',
        default: 'Fork the project and make a pull request with your new commit.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function (data) {
        fs.writeFile('./dist/README.md', generateMarkdown(data), function(err) {
            if (err) {
                console.log(err);
            }
            console.log('Success!');
        })
    })
}

// Function call to initialize app
init();

