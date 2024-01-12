// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(!license)
    return '';
}

switch(license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        
    default:
        return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(!license){
        return '';
    }
    switch (license) {
    case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
    default:
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(!license) {
        return ''; 
    }

    return `
## License
    
This project is licensed under the [${license} License](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(license)}
`;
}

module.exports = generateMarkdown;