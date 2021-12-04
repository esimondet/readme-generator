// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ![screenshot of app](assets/images/screenshot.png)

  ${data.usage}
 

  ## License

  ${data.license} //create cases for all four licenses with badge display links for each

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions 

  Please direct questions to ${data.github} at [https://github.com/${data.github}](https://github.com/${data.github})
  or email [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;
