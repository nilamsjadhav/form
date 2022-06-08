const { registerResponse } = require('../src/createForm.js');
const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const assert = require('assert');

const identity = (response) => response;

const splitByComma = hobbies => hobbies.split(',');

const isNameValid = (name) => name.length >= 5;

describe('registerResponse', () => {
  it('should register given response', () => {
    const field = new Field('name', 'Enter name', identity, identity);
    const form = new Form(field);

    const response = [];
    const recordDetails = (content) => response.push(content);

    registerResponse(form, 'abc', identity, recordDetails);
    assert.deepStrictEqual(response, [{ name: 'abc' }]);
  });

  it('should parse given values and register it', () => {
    const hobbiesField = new Field('hobbies', 'Enter hobbies',
      identity, splitByComma);
    const form = new Form(hobbiesField);

    const response = [];
    const recordDetails = (content) => response.push(content);

    registerResponse(form, 'abc,def', identity, recordDetails);
    assert.deepStrictEqual(response, [{ hobbies: ['abc', 'def'] }]);
  });

  it('should give next prompt', () => {
    const nameField = new Field('name', 'Enter name', identity, identity);
    const DOBField = new Field('DOB', 'Enter DOB', identity, identity);
    const form = new Form(nameField, DOBField);

    const response = [];
    const logger = (content) => response.push(content);

    registerResponse(form, 'abc', logger, identity);
    assert.deepStrictEqual(response, ['Enter DOB']);
  });

  it('should give \'Invalid response\' when input is not valid', () => {
    const nameField = new Field('name', 'Enter name', isNameValid);
    const form = new Form(nameField);

    const response = [];
    const logger = (content) => response.push(content);

    registerResponse(form, 'abc', logger, identity);
    assert.deepStrictEqual(response, ['Invalid response', 'Enter name']);
  });

  it('should give \'Thank you\' after writing into file', () => {
    const nameField = new Field('name', 'Enter name', identity);
    const form = new Form(nameField);

    const response = [];
    const logger = (content) => response.push(content);

    registerResponse(form, 'abc', logger, identity);
    assert.deepStrictEqual(response, ['Thank you']);
  });
});
