const { Form } = require('./form.js');
const { isNameValid, isDOBValid } = require('./validateInput.js');
const { Field } = require('./field.js');

const readLines = (storeDetails) => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    storeDetails(chunk.trim());
  });
};

const storeDetails = (form, response, logger) => {
  try {
    form.fillResponse(response);
  } catch (error) {
    logger('Invalid response');
  }

  if (form.isFormFilled()) {
    process.exit();
  }
  logger(form.getCurrentPrompt());
};

const identity = response => response;

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isNameValid, identity);
  const DobField = new Field('DOB', 'Enter DOB', isDOBValid, identity);
  return [nameField, DobField];
};

const fillForm = (logger) => {
  const form = new Form(createForm());
  logger(form.getCurrentPrompt());

  readLines((response) => storeDetails(form, response, logger));
};

const main = () => {
  fillForm(console.log);
};

main();
