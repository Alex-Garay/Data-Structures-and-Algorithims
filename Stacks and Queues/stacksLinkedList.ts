
  class Stack {
    top: any;
    bottom: any;
    next: any;
    length: number;
    constructor(){
      this.top = null;
      this.next = null;
      this.bottom = null;
      this.length = 0;
    }
    public peek() {
        return this.top;
    }
    public push(value:any){
        // OUR NODE
        const node = {
            value: value,
            next: null
        }
        // Checks to see if there aren't any values in our stack
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }
        this.length++;
    }
    public pop(){
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
    //isEmpty
  }
  
const myStackLinked = new Stack();

myStackLinked.push("George");
myStackLinked.push("Elaine");
myStackLinked.push("Kramer");
myStackLinked.push("Jerry");
myStackLinked.pop();
console.log(myStackLinked.peek());