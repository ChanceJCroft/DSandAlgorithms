//This section focuses primarily on custom created data structures

/* LINKED LISTS -
1. Linked lists keep track of the order by each "node" keeping track of what node is next
2. Very similar to an array, but it doesn't have to keep track of the constant order. Each property is an object keeping track of the next object
3. Beginning and end of the linked list is identified by the head and tail
*/

//Playing with linked lists

class LinkedList {
    constructor() {
        this.head = null; //First element of the list
        this.tail = null; //Last element in the list
    }

    //create a method to add new objects to the end, containing the value and next node
    append(value) {
        const newNode = { value: value, next: null};

        //check if there is an existing tail, if so add this node as the next node
        if(this.tail) {
            this.tail.next = newNode;
        }

        //check to see if there is a head, if not that means its an empty list and the first object should be the head
        if(!this.head) {
            this.head = newNode;
        }
    }

    //preprend adds to the beginning of the linked list
    prepend(value) {
        const newNode = { value: value, next: this.head };

        //this will just make it the new head, but the original object still does exist
        this.head = newNode;
        
        //if there is no existing tail, make this the head AND tail
        if(!this.tail) {
            this.tail = newNode;
        }
        
    }

    delete(value) {
        //check to make sure the list is not empty, if it is end the function

        if(!this.head) {
            return null;
        }

        //if the first value is the one to delete, change the first node to be the next node.
        //Since its a WHILE loop it will keep checking the head, in case you have multiple values that match
        while(this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;
        //check if there is a following value in the list
        while(curNode.next) {
            //if the next value equals the input value, point towards the NEXT value, skipping the one you want to delete
            if(curNode.next.value === value) {
                //easy way to view the next property of the next node
                curNode.next = curNode.next.next;
            } else {
                cureNode = curNode.next;
            }
            
            curNode = curNode.next;
        }

        //update the tail if the tail was removed
        if(this.tail.value === value) {
            //change the tail the latest valid curNode
            this.tail = curNode;
        }
    }


    //method to easily turn into an array
    toArray() {
        const elemens = [];

        let curNode = this.head;
        while(curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}
