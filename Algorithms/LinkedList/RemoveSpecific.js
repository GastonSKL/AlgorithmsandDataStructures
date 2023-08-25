class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LL {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      let node = new Node(value);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail = node;
        this.tail.next = node;
      }
  
      this.length++;
    }
  
    pop() {
      if (!this.head) return undefined;
  
      let current = this.head;
      let newtail = current;
  
      while (current.next) {
        newtail = current;
        current = current.next;
      }
  
      this.tail = newtail;
      this.tail.next = null;
      this.length--;
  
      if (this.length === 0) {
        this.tail = null;
        this.head = null;
      }
  
      return current.value;
    }
  
    shift() {
      if (!this.head) return undefined;
  
      let current = this.head;
      this.head = current.next;
      this.length--;
  
      if (this.length === 0) {
        this.tail = null;
      }
  
      return current.value;
    }
  
    unshift(value) {
      let node = new Node(value);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.next = node;
        this.head = node;
      }
  
      this.length++;
    }
  
    get(i) {
      if (i < 0 || i >= this.length) return undefined;
  
      let current = this.head;
      let counter = 0;
  
      while (counter != i) {
        current = current.next;
        counter++;
      }
  
      return current;
    }
  
    set(i, value) {
      let node = this.get(i);
  
      if (node) {
        node.value = value;
        return true;
      }
  
      return false;
    }
  
    insert(i, value) {
      if (i < 0 || i >= this.length) return undefined;
  
      if (i === 0) {
        this.unshift(value);
        return true;
      }
      if (i === this.length) {
        this.push(value);
        return true;
      }
  
      let node = new Node(value);
      let previous = this.get(i - 1);
      let current = previous.next;
  
      previous.next = node;
      node.next = current;
  
      this.length++;
    }
  
    removeSpecific(x) {
      let current = this.head;
      let prev = null;
  
      while (current) {
        if (current.value === x) {
          if (prev) {
            prev.next = current.next;
          } else {
            this.head = current.next;
          }
  
          if (!current.next) {
            this.tail = prev;
          }
  
          this.size--;
          break;
        }
  
        prev = current;
        current = current.next;
      }
    }
  
    findSuccessor(x) {
      let current = this.head;
  
      while (current) {
        if (current.value >= x) {
          return current.value;
        }
  
        current = current.next;
      }
  
      return null;
    }
  }