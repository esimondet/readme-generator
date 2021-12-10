//function to set license img and link based on inquirer choice
function setLicenseInfo(data) {
  switch (data.license) {
    case 'MIT':
      data.licenseLink = 'https://opensource.org/licenses/MIT';
      data.licenseImg = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'APACHE 2.0':
      data.licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      data.licenseImg = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'GPL 3.0':
      data.licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      data.licenseImg = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'BSD 3':
      data.licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      data.licenseImg = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      break;
    default:
      break;
  }
  return data;
}

// function that returns the license section of README
function renderLicenseSection(data) {

  if (data.license != 'None') {
    return `
  ## License

  This project is covered under the [${data.license}](${data.licenseLink}) license.
    `
  } else {

    return ``;
  }
}

function renderLicenseBadge(data) {

  if (data.license != 'None') {
    return `
    [![License](${data.licenseImg})](${data.licenseLink})
    `
  } else {

    return ``;
  }
}

function renderLicenseTableOfContents(data) {

  if (data.license != 'None') {
    return `
    * [License](#license)
    `
  } else {

    return ``;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  setLicenseInfo(data);

  return `
  # ${data.title}

  ${renderLicenseBadge(data)}

  ## Description

  <p>${data.description}</p>

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTableOfContents(data)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  <p>${data.installation}</p>

  ## Usage

  <p>${data.usage}</p>
  
  ${renderLicenseSection(data)}

  ## Contributing

  <p>${data.contribution}</p>

  ## Tests

  <code>${data.tests}</code>

  ## Questions 

  Please direct questions to ${data.github} at [https://github.com/${data.github}](https://github.com/${data.github})
  or email [${data.email}](${data.email}).

  ###### Made using Readme Generator!
`;
}

module.exports = generateMarkdown;
