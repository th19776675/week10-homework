const getEngineerCards = require("./getEngineerCards") 
const getInternCards = require("./getInternCards") 

function htmlOutput(manager, empEngineers, empInterns) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
  
    <header>
      <h1>
        ${manager.getName()}'s Team
      </h1>
    </header>
  
    <main>
      <div class="wrapper">
        <div class="card-wrapper">
          <div class="card-header">
            <div class="card-icon">
              <i class="fa fa-briefcase" style="font-size:40px"></i>
            </div>
            <div class="card-headings">
              <h2>${manager.getName()}</h2>
              <p>Manager</p>
            </div>
          </div>
          <div class="card-body">
            <div class="card-content"><p class="card-p">ID: ${manager.getId()}</p></div>
            <div class="card-content"><p class="card-p">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p></div>
            <div class="card-content"><p class="card-p">Office Number: ${manager.officeNumber}</p></div>
          </div>
        </div>
      </div>
      <div class="wrapper">
      ${getEngineerCards(empEngineers)}
      ${getInternCards(empInterns)}
      </div>
    </main>
  </body>
  </html>`
} 

module.exports = htmlOutput





