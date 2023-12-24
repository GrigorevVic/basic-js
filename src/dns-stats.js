const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(!domains) return {};

  const res = domains.reduce((acc, value) => {
    let a = value.split('.');
    return [...acc, ...a];
 }, []).reverse();

 const result = {};
 for (const name of res) {
    if (Object.hasOwn(result, name)) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }
  }

  const result2 = {};
  let key = '';
  for (const name in result) {
    key += `.${name}`;
    result2[key] = result[name];
   }
  return result2;
  }

module.exports = {
  getDNSStats
};
