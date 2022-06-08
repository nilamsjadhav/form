const { Field } = require('../src/field');
const { Form } = require('../src/form.js');
const assert = require('assert');

const identity = (response) => response;

describe('Form', () => {

  describe.skip('equals', () => {
    it('should equate two instance of class', () => {
      const field = new Field('name', 'name', identity, identity);
      const form1 = new Form(field);
      const form2 = new Form(field);
      assert.equal(form1.equals(form2), 'a');
    });
  });
});
