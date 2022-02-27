
const inquirer = require("inquirer");
const fs = require("fs")
let generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [

    {
        name: 'title',
        message: 'Enter the project title: ',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Enter the project description: ',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Enter the installation instructions: ',
        type: 'input'
    },
    {
        name: 'usage-info',
        message: 'Enter the usage information: ',
        type: 'input'
    },
    {
        name: 'contribution-guidelines',
        message: 'Enter the contribution guidelines: ',
        type: 'input'
    },
    {
        name: 'test',
        message: 'Enter the test instructions: ',
        type: 'input'
    },
    {
        message: "Select the lisence",
        name: 'lisence',
        choices: ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License'],
        type: 'list'
    },
    {
        name: 'github-username',
        message: 'Enter the GitHub username: ',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Enter the email address: ',
        type: 'input'
    },
];


function writeToFile(fileName, data) {




    fs.writeFile(fileName + '.md', generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


}

function init() {


    inquirer.prompt(questions).then(function (answers) {
        writeToFile('README', answers)

    })

}

init();

