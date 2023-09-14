
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'APACHE 2.0') {
    return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') {
    return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }
}


function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `[License](#license)`;
  }
}


function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License

This project is licensed under the ${license} License.

${renderLicenseBadge(license)}

`;
  }
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.project}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseLink}
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${licenseSection}

## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`

## Questions
If you have any questions, feel free to contact me at ${data.email} or visit my GitHub profile: [${data.github}](https://github.com/${data.github}).
  `;
}

module.exports = generateMarkdown;