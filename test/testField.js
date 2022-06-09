const { Field } = require('../src/field.js');
const assert = require('assert');

describe('Field', () => {

  describe('equalFields', () => {
    it('should equate two instance of field.', () => {
      const field1 = new Field('name', 'enter name');
      const field2 = new Field('name', 'enter name');
      assert.ok(field1.equalFields(field2));
    });

    it('should not equate two instance of field.', () => {
      const field1 = new Field('name', 'enter name');
      const field2 = new Field('age', 'enter age');
      assert.equal(field1.equalFields(field2), false);
    });
  });

  describe('getPrompt', () => {
    it('should give prompt', () => {
      const field = new Field('a', 'name');
      assert.strictEqual(field.getPrompt(), 'name');
    });
  });

  describe('isValid', () => {
    it('should validate field using given validator', () => {
      const isLongThan = (name) => name.length >= 5;
      const field = new Field('a', 'b', isLongThan);
      assert.equal(field.isValid('abcde'), true);
    });
    it('should not validate invalid field', () => {
      const isLongThan = (name) => name.length >= 5;
      const field = new Field('a', 'b', isLongThan);
      assert.equal(field.isValid('abcd'), false);
    });
  });

  describe('getInfo', () => {
    it('should provide name and value of field', () => {
      const field = new Field('a', 'b');
      assert.deepStrictEqual(field.getInfo(), { name: 'a', response: null });
    });
  });
});
