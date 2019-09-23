const sayHello = function(name) {
  return `hello ${name}`;
}

const characterCounter = function(str) {
  // remove the spaces
  str = str.split(' ').join('');
  const result = {};

  // loop through the string
  for (const char of str) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  // make sure to return
  return result;
};

module.exports.characterCounter = characterCounter;
module.exports.sayHello = sayHello;
