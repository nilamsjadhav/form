const { Form } = require('./form.js');
const { Field } = require('./field.js');
const lib = require('./validateFields.js');
const { isNameValid, isDOBValid, areHobbiesValid, isPhoneNumberValid } = lib;

const identity = response => response;

const splitByComma = hobbies => hobbies.split(',');

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isNameValid, identity);
  const DobField = new Field('DOB', 'Enter DOB', isDOBValid, identity);

  const hobbiesField = new Field(
    'hobbies',
    'Enter hobbies',
    areHobbiesValid, splitByComma);

  const phoneNoField = new Field(
    'phone number',
    'Enter phone number',
    isPhoneNumberValid);

  return new Form(nameField, DobField, hobbiesField, phoneNoField);
};

module.exports = { createForm };
