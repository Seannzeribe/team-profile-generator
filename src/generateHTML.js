// make function called managerCard and return html for manager card
const managerCard = (data) => {
  return `<div class="card">
  <h2>Name: ${data.name}
    <strong>Manager</strong>
  </h2>
        <div class="card-body">
            <strong>ID: ${data.id}</strong>
           
            <p>Email: ${data.email}</p>
            <p>Github: ${data.officeNumber}</p>
        </div>
    </div>`;
};

// make function called engineerCard and return html for engineer card
const engineerCard = (data) => {
  return `<div class="card">
  <h2>Name: ${data.name}
    <strong>Engineer</strong>
  </h2>
        <div class="card-body">
            <strong>ID: ${data.id}</strong>
           
            <p>Email: ${data.email}</p>
            <p>Github: ${data.github}</p>
        </div>
    </div>`;
};

// make function called internCard and return html for intern card
const internCard = (data) => {
  return `<div class="card">
   
    <h2>Name: ${data.name}
        <strong>Intern</strong>
    </h2>

    <div class="card-body">
    <strong>ID: ${data.id}</strong>
    <p>Email: ${data.email}</p>
    <p>School: ${data.school}</p>
    </div>
    </div>`;
};

const createTeam = (data) => {
  let html = "";
  html += managerCard(data[0]);
  html += engineerCard(data[1]);
  html += internCard(data[2]);
  return html;
};

const generateHTML = (data) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>HTML from NodeJs</title>
    </head>
    <body>
        <h1>Team</h1>
        <div class="container">
        <div class="card-wrapper">
            ${createTeam(data)}
        </div>
        </div>
    </body>
    </html>`;
};

module.exports = generateHTML;
