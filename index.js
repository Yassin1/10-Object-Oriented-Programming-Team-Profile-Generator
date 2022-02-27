const Manager = require("./src/manager");
const Engineer = require("./src/engineer");
const Intern = require("./src/intern");
const inquirer = require("inquirer");
const fs = require("fs");

let All = [];

function createManager(){
    inquirer
    .prompt([
        {
            Type: "input",
            message: "What is the Manager's name?",
            name:"Name",
        },
        {
            Type: "input",
            message: "What is the Manager's work ID?",
            name:"ID",
        },
        {
            Type: "input",
            message: "What is the Manager's email?",
            name:"Email",
        },
        {
            Type: "input",
            message: "What is the Manager's office number?",
            name:"Number",
        },
        {
            type: "list",
            message: "What would you like your Icon to be?",
            name: "Icon",
            choices: ["Monkey", "Chicken","Cow"],
        },
]).then((ManagerInfo) => {
const ManagerName = ManagerInfo.Name;
const ManagerID = ManagerInfo.ID;
const ManagerEmail = ManagerInfo.Email;
const ManagerNumber = ManagerInfo.Number;
const ManagerIcon = ManagerInfo.Icon

let MarkedEmployee = new Manager(ManagerName,ManagerID,ManagerEmail,ManagerNumber,ManagerIcon);

All.push(MarkedEmployee)

createEmployee();
})
}

function createEmployee() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "What is your next employee's name?",
        name: "name",
        },
        {
        type: "input",
        message: "What is your employee's ID?",
        name: "id",
        },
        {
        type: "input",
        message: "What is your employee's email?",
        name: "email",
        },
        {
        type: "list",
        message: "What role is does your employee have",
        name: "role",
        choices: ["Engineer", "Intern"],
        },
        {
        type: "list",
        message: "What would you like your Icon to be?",
        name: "Icon",
        choices: ["Monkey", "Chicken","Cow"],
        },
])
.then((GenericData) => {
        if (GenericData.role === "Engineer") {
            createEngineer(GenericData);
        } else if (GenericData.role === "Intern") {
            createIntern(GenericData);
        }
    });
}

function createEngineer(GenericData) {
    inquirer
    .prompt([
        {
        type: "input",
        message: "What is your employee's GitHub username?",
        name: "gitHub",
        },
        {
        type: "list",
        message: "Do you want to add another team member?",
        name: "add",
        choices: ["Yes", "No"],
        },
    ]).then((engineerData) => {

        const engineerGitHub = engineerData.gitHub;
        const engineerName = GenericData.name;
        const engineerIcon = GenericData.Icon;
        const engineerId = GenericData.id;
        const engineerEmail = GenericData.email;
        let MarkedEmployee = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub,engineerIcon);
        All.push(MarkedEmployee);
        if (engineerData.add === "Yes") {
            createEmployee();
        } else {
            completeTeam();
        }
    });
}

function createIntern(GenericData) {
    inquirer
        .prompt([
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school",
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "add",
            choices: ["Yes", "No"],
        },
    ]).then((internData) => {
        const internSchool = internData.school;
        const internName = GenericData.name;
        const internIcon = GenericData.Icon;
        const internId = GenericData.id;
        const internEmail = GenericData.email;
        let MarkedEmployee = new Intern(internName, internId, internEmail, internSchool,internIcon);
        All.push(MarkedEmployee);
        if (internData.add === "Yes") {
        createEmployee();
        } else {
        completeTeam();
        }
        
    });
}

function completeTeam() {
const HTMLfile = []

const HeaderHtml = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Information!</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
            <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Our Team</h2>
            </div>
            <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">`
    
    HTMLfile.push(HeaderHtml)
    
    for(let i = 0; i < All.length; i++) {
        let frame = 
        `<li>
        <div class="space-y-6">
        <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="../assets/icons/${All[i].getIcon()}.png" alt="">
        <div class="space-y-2">
            <div class="text-lg leading-6 font-medium space-y-1">
            <h3>${All[i].getName()}</h3>
            <p class="text-indigo-600">${All[i].getRole()}</p>
            <p class="text-sm text-indigo-600">Employee ID:${All[i].getId()}</p>`

        if (All[i].getRole() === "Manager") {
            frame += `<p class="text-xs text-indigo-600">Office Number: ${All[i].getOfficeNumber()}</p>`
        } else if (All[i].getRole() === "Engineer") {
            frame += `<p class="text-xs text-indigo-600">Github:https://github.com/${All[i].getGitHub()}</p>`
        } else {
            frame += `<p class="text-xs text-indigo-600">Attended school at:${All[i].getSchool()} </p>`
        }
    
    frame += 
    `</div>
    <ul role="list" class="flex justify-center space-x-5">
        <li>
        <a href="mailto:${All[i].getEmail()}" class="text-gray-400 hover:text-gray-500></a>
            <span class="sr-only"></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </a>
        </li>
    </div>`
    
    HTMLfile.push(frame)
    }
    const footerHtml = `
        </ul>
        </div>
        </div>
    </div>
    </body>
    </html>`
    
    HTMLfile.push(footerHtml)
    
    fs.writeFile("./Done/doneee.html", HTMLfile.join(''), function(err){
        if(err) {
            console.log(err);
        };
    });
}

createManager();