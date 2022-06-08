const { Form } = require('./form.js');
const { Field } = require('./field.js');
const lib = require('./validateFields.js');
const { MultiLineField } = require('./MultiLineField.js');
const { isNameValid, isDOBValid, areHobbiesValid, isPhoneNumberValid } = lib;

const identity = response => response;

const splitByComma = hobbies => hobbies.split(',');

const joinByNewlines = address => address.join('\n');

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

  const addressField = new MultiLineField(
    'address',
    ['Enter address line 1', 'Enter address line 2'],
    identity,
    joinByNewlines);

  return new Form(nameField, DobField,
    hobbiesField, phoneNoField, addressField);
};

module.exports = { createForm };
