const { NotImplementedError } = require("../extensions/index.js");

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
const alphabet = [];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let str = "";
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
    if (!this.type) {
      return str.split("").reverse().join("");
    }
    return str;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let str = "";
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
    if (!this.type) {
      return str.split("").reverse().join("");
    }
    return str;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
