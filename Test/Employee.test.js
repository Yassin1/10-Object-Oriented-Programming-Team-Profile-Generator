const Employee = require("../src/employee");

test("can create a name string using the contructor", () => {
    const name = "Paul}";
    const testName = new Employee(name, 10, "Paul.mcd1@icloud.com", 1);
    expect(testName.name).toBe(name);
});

test("can create a id number using the contructor", () => {
    const id = 10;
    const testId = new Employee("Paul", id, "Paul.mcd1@icloud.com", 1);
    expect(testId.id).toBe(id);
});

test("can create a email string using the contructor", () => {
    const email = 'email@email.com';
    const testEmail = new Employee("Paul", 10, email, 1);
    expect(testEmail.email).toBe(email);
});

test("get role method should return the word Employee", () => {
    const title = "Employee";
    const testTitle = new Employee("Paul", 10, "Paul.mcd1@icloud.com", 1);
    expect(testTitle.getRole()).toBe(title);
});