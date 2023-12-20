const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let copy = Array.from(arr);
  copy.splice(0, 1);
  let max = Number(copy.join(''));
  for (let i = 0; i < arr.length; i++) {
    copy = Array.from(arr);
    copy.splice(i, 1);
    newMax = Number(copy.join(''));
    if (max < newMax) max = newMax;
  }

  return max;
}

module.exports = {
  deleteDigit
};
