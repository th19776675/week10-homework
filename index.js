const fs = require("fs");
const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")

const htmlOutput = require("./src/htmlOutput")

inquirer.prompt([
  {
    type: "input",
    name: "managerName",
    message: "Input your name"
  },
  {
      type: "input",
      name: "managerId",
      message: "Input your ID"
  },
  {
      type: "input",
      name: "managerEmail",
      message: "Input your Email"
  },
  {
      type: "input",
      name: "officeNumber",
      message: "Input your office number"
  },
  {
    type: "loop",
    name: "employees",
    message: "Add an employee?",
    questions: [
      {
        type: "list",
        name: "empType",
        message: "What is their role?",
        choices: [
          "Engineer",
          "Intern",
        ],
        default: "Engineer"
      },
      {
        type: "input",
        name: "empName",
        message: "Input their name"
      },
      {
        type: "input",
        name: "empId",
        message: "Input their ID"
      },
      {
        type: "input",
        name: "empEmail",
        message: "Input their Email"
      },
      {
        type: "input",
        name: "empGithub",
        message: "Input their Github username",
        when: (answers) => answers.empType === "Engineer"
      },
      {
        type: "input",
        name: "empSchool",
        message: "Input the school they belong to",
        when: (answers) => answers.empType === "Intern"
      },
    ]
  }
]). then((res) => {
  const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber);
 
  let interns = res.employees.filter((employee) => employee.empType === "Intern");
  let empInterns = []
  for (let i = 0; i < interns.length; i++){
    let intern = interns[i]
    empInterns.push(new Intern(intern.empName, intern.empId, intern.empEmail, intern.empSchool))
  }

  let engineers = res.employees.filter((employee) => employee.empType === "Engineer");
  let empEngineers = []
  for (let i = 0; i < engineers.length; i++){
    let engineer = engineers[i]
    empEngineers.push(new Engineer(engineer.empName, engineer.empId, engineer.empEmail, engineer.empGithub))
  }

  let html = htmlOutput(manager, empEngineers, empInterns)

  fs.writeFile('./dist/index.html', html, function (err) {
    if (err) throw err;
    console.log('HTML Written!');
  }); 
})