const Engineer = require("../src/engineer");

test("can create a github using this constructor", () => {
    const gitHub = "Orbit001";
    const testgitHub = new Engineer(gitHub, 10, "Paul.mcd1@icloud.com", gitHub);
    expect(testgitHub.gitHub).toBe(gitHub);
});

test("GetRole will list engineer", () => {
    const title = "Engineer";
    const testTitle = new Engineer("Paul", 10, "paul.mcd1@icloud.com", 1);
    expect(testTitle.getRole()).toBe(title);
});

