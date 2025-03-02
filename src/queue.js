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
    this.collection = null;
  }

  getUnderlyingList() {
    return this.collection;
  }

  enqueue(value) {
    if (this.collection === null) {
      this.collection = new ListNode(value);
      return;
    }

    let currentNode = this.collection;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(value);
  }

  dequeue() {
    const value = this.collection.value;
    this.collection = this.collection.next;
    return value;
  }
}

module.exports = {
  Queue
};
