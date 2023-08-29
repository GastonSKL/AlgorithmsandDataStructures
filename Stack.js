class Stack{
    constructor(){
        this.items = [];
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        if(this.isEmpty) return "Stack empty";
        this.items.pop();
    }

    peeK(){
        if(this.isEmpty) return "Stack empty";
        return this.items[this.items.length-1];
    }

    clear(){
        this.items = [];
        return "Stack empty";
    }

    


}