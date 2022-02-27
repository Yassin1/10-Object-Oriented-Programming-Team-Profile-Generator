class Employee {
constructor(name, id, email,Icon) {
this.name = name;
this.Icon = Icon;
this.id = id;
this.email = email;
}
getName(){
    return this.name;
}
getIcon(){
    return this.Icon;
}
getId(){
    return this.id;
}
getEmail()  {
    return this.email;
    }
getRole()   {
    return "Employee";
    }
}

module.exports = Employee;