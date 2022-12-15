"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(val === this.val) {
      return this;
    }
    if(val < this.val) {
      if(!this.left) return undefined;
      return this.left.findRecursively(val);
    } else {
      if(!this.right) return undefined;
      return this.right.findRecursively(val);
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if(val < this.val) {
      if(!this.left) {
        this.left = new Node(val);
        return this;
      }
      return this.left.insertRecursively(val);
    } else {
      if(!this.right) {
        this.right = new Node(val);
        return this;
      }
      return this.right.insertRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

    let nodesArray = [];

    if (this === null) return nodesArray;
    nodesArray.push(this.val);
    if(this.left) {
      nodesArray = [...nodesArray, ...this.left.dfsPreOrder()];
    }
    if(this.right) {
      nodesArray = [...nodesArray, ...this.right.dfsPreOrder()];
    }

    return nodesArray;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    //edge case
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    //edge case
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val)
        return current;

      current = (val < current.val)
        ? current.left
        : current.right;
    }

    return undefined;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;

    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) return [];
    
    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
