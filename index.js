// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;


// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name: 'summery',
        message: 'Please give a summery of the purpose of the project.',
    },
    {
        type: 'input',
        name: 'summery',
        message: 'Please explain how to install the application.',
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What is this project used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: [
            "MIT",
            "ISC",
            "GNU"
        ]
    },
    {
        type: 'input',
        name: 'github username',
        message: 'Please enter Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email:',
    },
]);
}

// Function to generate README content
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function generateReadme(answers) {
    return `# ${answers.title}\n\n${answers.summery}\n\n${answers.installation}\n\n${answers.purpose}\n\nLicense: ${answers.license}\n\nContact: ${answers.email}`;
}

async function writeToFile(fileName, data) {
    await fs.writeFile(fileName, data);
}

async function init() {
    try {
        const answers = await promptUser();
        const readmeContent = generateReadme(answers);
        await writeToFile('./README.md', readmeContent);
    } catch(err) {
        console.log(err);
    }
}
// Function call to initialize app
init();