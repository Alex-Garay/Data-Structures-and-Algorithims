class StacksArray {
    array: any[];
    constructor() {
        this.array = [];
    }

    public peek() {
        return this.array[this.array.length - 1];
    }

    public push(value: any) {
        this.array.push(value);
    }

    public pop() {
        return this.array.pop();
    }
}

const myStackArray = new StacksArray();

myStackArray.push("George");
myStackArray.push("Elaine");
myStackArray.push("Kramer");
myStackArray.push("Jerry");
myStackArray.pop();
console.log(myStackArray);