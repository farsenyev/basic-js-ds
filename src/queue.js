const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = null;
    this.tail = null;
  }
  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.value
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new ListNode(value);

    if (!this.value || !this.tail){
      this.value = newNode;
      this.tail = newNode;

      return this;
    }else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.value){
      return null;
    }

    //return head and delete head
    const removed = this.value.value
    this.value = this.value.next

    if(!this.value){
      this.tail = null
    }

    return removed
  }

}

module.exports = {
  Queue
};
