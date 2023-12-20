const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|'} = options;
  str = String(str);
  addition = String(addition);
  if (!repeatTimes) return `${str}${addition}`;
  let addSep = '';
  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addSep += `${addition}`;
      if(i === additionRepeatTimes - 1) break;
      addSep += `${additionSeparator}`;
    }

    addition = addSep.length > addition.length ? addSep : addition;
  }
  let res = '';
  for (let i = 0; i < repeatTimes; i++) {
    res += `${str}${addition}`;
    if(i === repeatTimes - 1) break;
    res += `${separator}`;
  }
  return res;
}

module.exports = {
  repeater
};
