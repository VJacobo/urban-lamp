// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generate } = require('rxjs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
        .then((answers) => {
            const readmeContent = generateReadme(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => console.error(error));
}

// Function call to initialize app
init();