
const Employee = require("./employee");

class Manager extends Employee {
constructor(name, id, email, officeNumber,Icon) {
super(name, id, email,Icon);
this.officeNumber = officeNumber;
}
getOfficeNumber()   {
        return this.officeNumber;
    }
getRole()   {
        return "Manager";
    }
}
module.exports = Manager;