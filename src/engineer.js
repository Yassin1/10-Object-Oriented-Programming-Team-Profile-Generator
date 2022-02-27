const Employee = require("./employee");

class Engineer extends Employee {
constructor(name, id, email, gitHub,Icon) {
super(name, id, email,Icon);
this.gitHub = gitHub;
}

getGitHub() {
        return this.gitHub;
    }
getRole()   {
        return "Engineer";
    }
}

module.exports = Engineer;