/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openParas = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (let x of s) {
    if (openParas[x]) {
      stack.push(x);
    } else {
      if (!stack.length) return false;
      if (openParas[stack.pop()] !== x) {
        return false;
      }
    }
  }
  return !stack.length;
};

console.log(isValid("(()[]{}())"));
