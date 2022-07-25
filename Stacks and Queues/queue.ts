class Queue {
    first: any;
    last: any;
    length: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    public peak() {
        return this.first;
    }

    public enqueue(value: any):void {
        const node = {
            value: value,
            next: null,
        }

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    public dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;
    }
}

const myqueue = new Queue();
myqueue.enqueue("Elaine");
myqueue.enqueue("George");
myqueue.dequeue();
myqueue.enqueue("Kramer");
myqueue.enqueue("Jerry");
console.log(myqueue.peak())