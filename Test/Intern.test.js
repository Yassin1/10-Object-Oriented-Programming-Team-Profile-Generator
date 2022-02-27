const Intern = require("../src/intern");

test("creates a school using the contructor", () => {
  const school = "UPENN";
  const testSchool = new Intern("Paul", 10, "paul.mcd1@icloud.com", school);
  expect(testSchool.school).toBe(school);
});

test("getrole method will list word Intern", () => {
  const title = "Intern";
  const testTitle = new Intern("Paul", 10, "paul.mcd1@icloud.com", 1);
  expect(testTitle.getRole()).toBe(title);
});