class QElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element, priority) {
      const qElement = new QElement(element, priority);
      let isInserted = false;
  
      for (let i = 0; i < this.items.length; i++) {
        if (qElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, qElement);
          isInserted = true;
          break;
        }
      }
  
      if (!isInserted) {
        this.items.push(qElement);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items.shift().element;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0].element;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }