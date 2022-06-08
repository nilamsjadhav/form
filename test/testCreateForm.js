const { registerResponse } = require('../src/createForm.js');
const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const assert = require('assert');

const identity = (response) => response;
const splitByComma = hobbies => hobbies.split(',');

describe('registerResponse', () => {
  it('should register given response', () => {
    const field = new Field('name', 'Enter name', identity, identity);
    const form = new Form(field);
    const response = 'abc';

    const actual = registerResponse(form, response, identity);
    assert.deepStrictEqual(actual, { name: 'abc' });
  });

  it('should register given response and parse it', () => {
    const hobbiesField = new Field('hobbies', 'Enter hobbies',
      identity, splitByComma);
    const form = new Form(hobbiesField);

    registerResponse(form, 'abc,def', identity);
    const actual = registerResponse(form, '2001-12-12', identity);
    assert.deepStrictEqual(actual, { hobbies: ['abc', 'def'] });
  });
});
