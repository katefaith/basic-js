const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.chain.push('( )')
    }

    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let res = this.chain.join('~~')
    this.chain = []
    return res
  }
};

module.exports = chainMaker;
