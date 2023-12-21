const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * 
 */
const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let str = '';
    let indexKey;
    let indexMessage;
    let offset;
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j === key.length) j = 0;
      indexKey = alphabet.indexOf(key[j].toLowerCase());
      indexMessage = alphabet.indexOf(message[i].toLowerCase());
      offset = indexMessage + indexKey;

      if (!alphabet.includes(message[i].toLowerCase())) {
        str += message[i];
        continue;
      }

      if (offset <= 25) {
        str += alphabet[offset].toUpperCase();
        j++;
      } else {
        str += alphabet[offset - 26].toUpperCase();
        j++;
      }
    }
    return str;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let str = '';
    let indexKey;
    let indexMessage;
    let offset;
    for (let i = 0, j = 0; i < message.length; i++) {
        if (j === key.length) j = 0;
        indexKey = alphabet.indexOf(key[j].toLowerCase());
        indexMessage = alphabet.indexOf(message[i].toLowerCase());
        offset = indexMessage - indexKey;
        if (offset < 0) offset = 26 + (indexMessage - indexKey);
  
        if (!alphabet.includes(message[i].toLowerCase())) {
          str += message[i];
          continue;
        }
  
        if (offset <= 25) {
        str += alphabet[offset].toUpperCase();
        j++;
        } else {
        str += alphabet[offset - 26].toUpperCase();
        j++;
        }
    }
  return str;
   }
}

module.exports = {
  VigenereCipheringMachine
};
