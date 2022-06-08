const { Form } = require('./form.js');
const { Field } = require('./field.js');
const lib = require('./validateFields.js');
const { isNameValid, isDOBValid, areHobbiesValid } = lib;

const identity = response => response;

const splitByComma = hobbies => hobbies.split(',');

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isNameValid, identity);
  const DobField = new Field('DOB', 'Enter DOB', isDOBValid, identity);
  const hobbiesField = new Field('hobbies', 'Enter hobbies',
    areHobbiesValid, splitByComma);
  return new Form(nameField, DobField, hobbiesField);
};

module.exports = { createForm };
