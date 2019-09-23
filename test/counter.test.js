const assert = require('chai').assert;
const characterCounter = require('../characterCounter').characterCounter;

describe('Character counter', () => {

  it('should return an object given a string', () => {
    const output = characterCounter('lighthouse in the house');
    assert.isObject(output);
  });

  it('should return a specific object when given a string', () => {
    const output = characterCounter('ab c');
    assert.deepEqual(output, {
      a: 1,
      b: 1,
      c: 1
    });
  });

  it('should be able to handle multiple of the same characters in the string', () => {
    const output = characterCounter('ab ab c');
    assert.deepEqual(output, {
      a: 2,
      b: 2,
      c: 1
    });
  });

});
