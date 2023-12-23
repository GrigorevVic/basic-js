const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position >= this.getLength() || typeof position !== 'number') {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.map(el => `( ${el} )~~`);
    this.chain.length = 0;
    return res.join('').slice(0, -2);
  }
}

module.exports = {
  chainMaker
};
