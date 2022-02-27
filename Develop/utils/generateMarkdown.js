
function renderLicenseBadge(license) {

  if (license == 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  }
  else if (license == 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
  }
  else if (license == 'BSD 2-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]';
  }
  else {
    return '';
  }

}


function renderLicenseLink(license) {


  if (license == 'Apache 2.0 License') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license == 'BSD 3-Clause License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
  else if (license == 'BSD 2-Clause License') {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  }
  else {
    return '#';
  }


}


function renderLicenseSection(license) { }


function generateMarkdown(data) {


  let badge = renderLicenseBadge(data.lisence);
  let lisenceLink = renderLicenseLink(data.lisence);


  return `

# ${data.title}
    

## Table Of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Lisence](#lisence)
7. [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data['usage-info']}

## Contributing
${data['contribution-guidelines']}

## Tests
${data.test}

## Lisence
${data.lisence}<br>
${badge}(${lisenceLink})

## Questions
- My GitHub Profile https://github.com/${data['github-username']}
- Reach out to me on my email ${data.email}

`;


}




module.exports = generateMarkdown;
