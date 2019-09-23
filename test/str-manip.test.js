const assert = require('chai').assert;
const sayHello = require('../str-manip');

describe('Tests for str-manip.js', () => {

  describe('Another level deeper', () => {
    it('should return "hello Andy" when passed "Andy"', () => {
      const output = sayHello('Andy');
      assert.equal(output, 'hello Andy');
    });

    it('should return "hello Cathy" when passed "Cathy"', () => {
      const output = sayHello('Cathy');
      assert.equal(output, 'hello Cathy');
    });
  });

});
