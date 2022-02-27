const Employee = require("./employee");

class Intern extends Employee {
constructor(name, id, email, school,Icon) {
super(name, id, email,Icon);
this.school = school;
}
getSchool() {
        return this.school;
    }
getRole()   {
        return "Intern";
    }
}

module.exports = Intern;