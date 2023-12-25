const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.main = null;
  }

  root() {
    return this.main
  }

  add(data) {
    this.main = addNode(this.main, data)

    function addNode(node, data){
      if (!node){
        return new Node(data);
      }

      if (node.data === data){
        return node;
      }

      if (data < node.data){
        node.left = addNode(node.left, data)
      }else {
        node.right = addNode(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchNode(this.main, data)

    function searchNode(node, data){
      if (!node){
        return false;
      }

      if (node.data === data){
        return true;
      }

      if (data < node.data){
        return searchNode(node.left, data);
      }else{
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.main, data)

    function findNode(node, data){
      if (!node){
        return null;
      }

      if (node.data === data){
        return node;
      }

      if (data < node.data){
        return findNode(node.left, data);
      }else{
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.main = removeNode(this.main, data)

    function removeNode(node, data){
      if (!node){
        return null;
      }

      if (data < node.data){
        node.left = removeNode(node.left, data)
        return node
      }else if(data > node.data){
        node.right = removeNode(node.right, data)
        return node
      }else{
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          node = node.right;
          return node;
        }
        if (!node.right){
          node = node.left;
          return node;
        }

        let succ = node.right;
        while (succ.left){
          succ = succ.left
        }
        node.data = succ.data
        node.right = removeNode(node.right, succ.data)

        return node;
      }
    }
  }

  min() {
    if(!this.main){
      return;
    }
    let node = this.main;
    while(node.left){
      node = node.left
    }

    return node.data
  }

  max() {
    // const maxNode = this.findMax(this._main);
    // return maxNode ? maxNode.data : null;
    if (!this.main){
      return;
    }

    let node = this.main
    while(node.right){
      node = node.right
    }

    return node.data

  }

  findMax(node){
    if (!node){
      return null;
    }
    while(node.right){
      node = node.right;
    }
    return node;
  }

}

module.exports = {
  BinarySearchTree
};