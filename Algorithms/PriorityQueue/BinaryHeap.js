class BinaryHeap {
    constructor() {
      this.heap = [];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      if (this.isEmpty()) return null;
      return this.heap[0];
    }

    less(i, j) {
        const node1 = this.heap[i];
        const node2 = this.heap[j];
        return node1 <= node2;
    }
  
    swap(i, j) {
          const temp = this.heap[i];
          this.heap[i] = this.heap[j];
          this.heap[j] = temp;
    }

    swim(k) {
        let parent = Math.floor((k - 1) / 2);
        while (k > 0 && this.less(k, parent)) {
          this.swap(parent, k);
          k = parent;
          parent = Math.floor((k - 1) / 2);
        }
    }
  
    add(elem) {
        if (elem === null) throw new Error("Element must not be null");
        this.heap.push(elem);
        this.swim(this.size() - 1);
    }

    poll() {
      return this.removeAt(0);
    }
  
    contains(elem) {
      return this.heap.includes(elem);
    }
  
    sink(k) {
      const heapSize = this.size();
      while (true) {
        const left = 2 * k + 1;
        const right = 2 * k + 2;
        let smallest = left;
  
        if (right < heapSize && this.less(right, left)) smallest = right;
  
        if (left >= heapSize || this.less(k, smallest)) break;
  
        this.swap(smallest, k);
        k = smallest;
      }
    }
  
    remove(element) {
      if (element === null) return false;
      const index = this.heap.indexOf(element);
      if (index === -1) return false;
      this.removeAt(index);
      return true;
    }
  
    removeAt(i) {
      if (this.isEmpty()) return null;
      const indexOfLastElem = this.size() - 1;
      const removedData = this.heap[i];
      this.swap(i, indexOfLastElem);
      this.heap.pop();
  
      if (i === indexOfLastElem) return removedData;
      const elem = this.heap[i];
      this.sink(i);
      if (this.heap[i] === elem) this.swim(i);
      return removedData;
    }
  
    isMinHeap(k) {
      const heapSize = this.size();
      if (k >= heapSize) return true;
      const left = 2 * k + 1;
      const right = 2 * k + 2;
      if (left < heapSize && !this.less(k, left)) return false;
      if (right < heapSize && !this.less(k, right)) return false;
      return this.isMinHeap(left) && this.isMinHeap(right);
    }
  
    toString() {
      return this.heap.toString();
    }
  }
  