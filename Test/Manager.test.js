const Manager = require("../src/manager");

test("create an office number using constructor", () => {
    const officeNumber = 10;
    const testOfficeNumber = new Manager('phalen', 10, "Paul.mcd1@icloud.com", officeNumber);
    expect(testOfficeNumber.officeNumber).toBe(officeNumber);
  });

test("getrole method should will list Manager", () =>{
    const title = "Manager";
    const testTitle = new Manager('Paul', 10, "Paul.mcd1@icloud.com", 1);
    expect(testTitle.getRole()).toBe(title);
})
