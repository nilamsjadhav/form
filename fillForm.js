const { createForm } = require('./src/userForm.js');
const { registerResponse } = require('./src/createForm.js');
const fs = require('fs');

const writeData = (form) => {
  fs.writeFileSync('./userDetail.json', JSON.stringify(form), 'utf8');
};

const fillForm = (logger, writeData) => {
  const form = createForm();
  logger(form.getCurrentPrompt());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (response) => {

    registerResponse(form, response.trim(), logger, writeData);
  });
};

const main = () => {
  fillForm(console.log, writeData);
};

main();
