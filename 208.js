var Node = function() {
  this.children = {};
  this.end = false;
}

var Trie = function() {
  this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for (let ch of word) {
    if (!Object.keys(curr.children).includes(ch)) {
      curr.children[ch] = new Node();
    }
    curr = curr.children[ch];
  }
  curr.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curr = this.root;
  for (let ch of word) {
    if (!Object.keys(curr.children).includes(ch)) {
      return false;
    }
    curr = curr.children[ch];
  }
  return curr.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;
  for (let ch of prefix) {
    if (!Object.keys(curr.children).includes(ch)) {
      return false;
    }
    curr = curr.children[ch];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

