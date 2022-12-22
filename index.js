const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const teamArray = [];
const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's this manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What's this manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What's this manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What's this manager's office number?",
      },
    ])
    .then((data) => {
      const { name, id, email, officeNumber } = data;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      engineerPrompt(teamArray);
    });
};

const engineerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's this engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What's this engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What's this engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What's this engineer's github?",
      },
    ])
    .then((data) => {
      const { name, id, email, github } = data;
      const engineer = new Engineer(name, id, email, github);
      teamArray.push(engineer);
      internPrompt(teamArray);
    });
};

const internPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's this intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What's this intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What's this intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What's this intern's school?",
      },
    ])
    .then((data) => {
      const { name, id, email, school } = data;
      const intern = new Intern(name, id, email, school);
      teamArray.push(intern);
      console.log(teamArray);
    })
    .then(() => {
      fs.writeFile("index.html", generateHTML(teamArray), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("HTML file created successfully");
        }
      });
    });
};

managerPrompt();
