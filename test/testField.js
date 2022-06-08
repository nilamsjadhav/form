const { Field } = require('../src/field.js');
const assert = require('assert');

describe('Field', () => {
  describe('equals', () => {
    it('should equate two instance of field', () => {
      const validator = response => true;
      const field1 = new Field('name', 'Enter name', validator);
      const field2 = new Field('name', 'Enter name', validator);
      assert.equal(field1.equals(field2), true);
    });
  });
});
