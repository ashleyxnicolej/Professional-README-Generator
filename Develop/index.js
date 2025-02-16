import inquirer from 'inquirer';
import fs from 'fs';

// Prompt questions for user input
const questions = [
  { type: "input", name: "title", message: "Project Title:" },
  { type: "input", name: "description", message: "Project Description:" },
  { type: "input", name: "installation", message: "Installation Instructions:" },
  { type: "input", name: "usage", message: "Usage Information:" },
  { type: "input", name: "contribution", message: "Contribution Guidelines:" },
  { type: "input", name: "test", message: "Test Instructions:" },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: ["MIT", "Apache 2.0", "GPL", "BSD", "None"],
  },
  { type: "input", name: "github", message: "GitHub Username:" },
  { type: "input", name: "email", message: "Email Address:" },
];

// Function to generate README content
const generateREADME = (answers) => 
`# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
For any questions, contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;

// Initialize the app
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.error(err) : console.log("✅ README.md successfully created!")
    );
  });
};

// Run the script
init();