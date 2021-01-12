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

    //create a method to add new objects, containing the value and next node
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
}
