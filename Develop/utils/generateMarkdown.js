// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // Return an empty string if no license
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`; // Badge for the given license
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}



// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return ''; // Return an empty string if no license
  }
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return licenseLinks[license] || ''; // Return the corresponding license link, or empty if not found
}
// If there is no license, return an empty string
function renderLicenseLink(license) {}



// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return an empty string if no license
  }
  return `## License

This project is licensed under the ${license} license. See the [License Link](${renderLicenseLink(license)}) for more details.

${renderLicenseBadge(license)}`; // Include the license badge and link
}
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at [${data.email}](mailto:${data.email}). Visit my GitHub profile: [${data.github}](https://github.com/${data.github}).
`;
}

