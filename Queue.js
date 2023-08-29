class Queue{
    constructor(){
        this.items = [];
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    Enqueue(value){
        this.items.push(value);
        return "Item added to the queue";
    }

    Dequeue(){
        if(this.isEmpty) return "Queue already empty";
        return this.items.shift();
    }

    peek(){
        if(this.isEmpty) return "Queue empty";
        return this.items[0];
    }

    clear(){
        this.items = [];
        return "Queue emptied";
    }
}