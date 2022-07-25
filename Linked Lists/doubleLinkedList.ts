class DoubleLinked {
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
    
    public Append(value: any):void {
        // Create our new node
        const node = {
            previous: null,
            value: value,
            next: null,
        }
        // Add our node to our tail's next
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node; 
        this.length++
    }

    public Prepend(value:any):void {
        // Create our new node
        const node = {
            previous: null,
            value: value,
            next: null
        }
        // Make the current haed the next or follower of the new node
        node.next = this.head;
        this.head.previous = node;
        // make our new node our head
        this.head = node;
        this.length++;
    }

    public Get():number[] {
        // Storage for our nodes
        const mynodes:any[] =  [];
        // Keeps track of our curent node, starting with the head
        let currentNode = this.head;
        // Checks that we have not ran out of nodes
        while(currentNode.next != null) {
            // We add our current node's values to our nodes storage
            mynodes.push(currentNode.value);
            // We make our current node the next node
            currentNode = currentNode.next;
        }
        return mynodes;
    }
    public Insert(index:number, value:any):void {
        // Create new node
        const node = {
            previous: null,
            value: value,
            next: null
        }
        // Find the node before our insertion index
        const leader = this.TraverseToIndex(index);
        // The node sitting at the index we intend to shift
        const follower = leader.next;
        // Point our next from leader to our new node
        leader.next = node;
        // Make our new node's next be the old node it shifted
        node.previous = leader;
        node.next = follower;
        follower.previous = node;
        this.length++
    }

    public Remove(index:number):void {
        // Error if we try to get the index value before our delete index
        if (index === 0) {
            // Makes our second node in our linked list our head
            this.head = this.TraverseToIndex(index).next;
        }
        // Get the node before our intended delete index
        const leader = this.TraverseToIndex(index - 1);
        // Get the node after our intended delete index
        const follower = this.TraverseToIndex(index + 1);
        // Connect the leader and follower, cutting the intended delete value off
        leader.next = follower;
        this.length--;
    }

    private TraverseToIndex(index:number) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const double = new DoubleLinked("George");
double.Prepend("Hello");
double.Prepend("Costanza");
double.Append("Kramer");
double.Append("Elaline");
console.log(double.Get());