function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return ' [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return ' [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return ' [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
      return ' [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License

    This project is licensed under the ${license} license.
    
    Copyright (c) 2023 Kirill Lazutin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
}

function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
# Title 

${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [GitHubName](#githubname)
* [Email](#email)
* [Questions](#questions)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## GitHubName

${data.GitHubName}

## Email  

${data.email}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.GitHubName}](https://github.com/${
    data.GitHubName
  }/).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
