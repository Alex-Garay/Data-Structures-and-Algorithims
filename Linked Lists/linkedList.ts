class LinkedList {
    head: any;
    tail: any;
    length: number;
    constructor(value:any) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    Append(value: any) {
        const node = {
            value: value,
            next: null,
        }
        this.tail.next = node;
        this.tail = node; 
        this.length++
    }

    Prepend(value:any) {
        const node = {
            value: value,
            next: null
        }
        node.next = this.head;
        this.head = node;
        this.length++;
    }
}

const mylist:LinkedList = new LinkedList('hello');
mylist.Append("World");
mylist.Append("!");
mylist.Prepend("George");
mylist.Prepend("Dwight");
mylist.Append("Costanza");
console.log(mylist);