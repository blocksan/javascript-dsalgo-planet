/**
 * This LL implementation includes with Big O
 * 1. Push          -   O(1)
 * 2. Pop           -   O(n)
 * 3. Shift         -   O(1)
 * 4. Unshift       -   O(1)
 * 5. Traverse      -   O(n)
 * 6. Reverse       -   O(n)
 * 7. Get           -   O(n)
 * 8. Set           -   O(n)
 * 9. Insert        -   O(n) //at specific position 
 * 10. Search Node  -   O(n) 
 * 11. Remove       -   O(n)
 */
/**
 * Node class will act as a single node
 * It has two properties
 * Value - value it will hold
 * Next - pointer to the next value
 */
class Node{
    
    /**
     * constructor to initialize the node
     */
    constructor(value){
        this.value = value
        this.next = null
    }
}

/**
 * Note a linked list keeps tracks of head, tail and length of the list
 */
class SinglyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * this method insert value to the tail/end of the linked list
     * keep track of head
     * keep track of tail
     * keep track of the length of the list
     * @param {number|string|object} value 
     * @returns list
     */
    push(value){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length +=1
        return this
    }

    /**
     * this method remove value from the tail/end of the linked list
     * keep track of head
     * keep track of tail
     * keep track of the length of the list
     * @param {number|string|object} value 
     * @returns list
     */
    pop(){
        if(this.length > 1){
            let ptr = this.head;
            let prevPtr = ptr
            while(ptr.next){
                prevPtr = ptr
                ptr = ptr.next
            }
            prevPtr.next = null
            this.tail = prevPtr
            this.length =  --this.length
        }else if(this.length === 1){
            this.tail = null
            this.head = null
            this.length =  0
        }
        return this
    }


     /**
     * this method insert value to the head/front of the linked list
     * keep track of head
     * keep track of tail
     * keep track of the length of the list
     * @param {number|string|object} value 
     * @returns list
     */
    unShift(value){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length +=1
        return this
    }

    /**
     * this method remove value from the head/front of the linked list
     * keep track of head
     * keep track of tail
     * keep track of the length of the list
     * @param {number|string|object} value 
     * @returns list
     */
    shift(){
        let temp;
        if(this.length > 1){
            temp = this.head
            this.head = this.head.next;
            this.length = --this.length
        }else if(this.length === 1){
            temp = this.head
            this.tail = null
            this.head = null
            this.length =  0
        }
        /**
         * making the value of variable null makes it available for garbage collector in javascript,
         * it will prevent the memory leak
         */
        temp = null;
        return this
    }

    /**
     * This method will return true/false if element found the in the list list
     * @param {number|string|object} value 
     */
    searchNode(value){
        let ptr = this.head;
        let elementFound = false
        while(ptr){
            if(ptr.value === value){
                elementFound = true;
                break
            }
            ptr = ptr.next
        }
        return elementFound
    }

    /**
     * Get element from the list based on index
     * index startinng from 0
     * @param {*} value 
     * @returns Node
     */
    get(index){
        let node = null
        if(!this.head){
            return node
        }
        let counter = 0;
        let ptr = this.head;
        while(ptr.next){
            if(counter === index){
                node = ptr
            }
            ptr = ptr.next
            counter+=1
        }
        return node
    }

     /**
     * Set/Update the element into the linked list based on index passed
     * index startinng from 0
     * @param {*} value 
     * @returns SinglyLinkedList
     */
    set(value, index){
        const nodeFound = this.get(index);
        if(nodeFound){
            nodeFound.value = value
            return true
        }

        return false
    
    }

     /**
     * insert the element into the linked list based on index passed
     * index startinng from 0
     * @param {*} value 
     * @returns SinglyLinkedList
     */
    insert(value, index){
        /**
         * base case if length of list is same as index passed
         * that means insert node at end of the list and we can resuse our PUSH method
         */
        if(index === this.length){
            return this.push(value)
        }

        /**
         * base case if length of list is equal to 1 or index is equal to 0
         * that means insert node at frond/head of the list and we can resuse our UNSHIFT method
         */
        if(index === 0){
            return this.unShift(value)
        }

        /**
         * If index is neither end or start of the linked list that means index lies between the list
         * reuse GET method by passing (index-1) which will return the previous node then the required 
         * and then we can change the next pointer of the previous node with newly created Node
         */

        const prevNode = this.get(index-1)
        if(!prevNode){
            return null
        }
        const newNode = new Node(value);
        newNode.next = prevNode.next
        prevNode.next = newNode;
        return this
    }

    /**
     * This method removes the element from the specific position
     * @param {number} index 
     * @returns SinglyLinkedList
     */
    remove(index){
        /**
         * Base case, when index is out of bounds
         */
        if(index < 0 || index > this.length){
            return false
        }

        /**
         * base case, when index is equal to 0, then we can say first has to be removed 
         */
        if(index === 0){
            let temp = this.head
            this.head = this.head.next
            temp = null
            return true
        }

        /**
         * base case, when index is equal to length of the SLL, then we can say last has to be removed 
         */
        if(index === this.length){
            let prevNode = this.get(index-1)
            if(!prevNode)
                return false

            let temp = this.tail;
            prevNode.next = null
            this.tail = prevNode
            temp = null
            return true
        }

        /**
         * If index is neither end or start of the linked list that means index lies between the list
         * reuse GET method by passing (index-1) which will return the previous node then the required 
         * and then we can change the next pointer of the previous node with newly created Node
         */
        let prevNode = this.get(index-1)
        prevNode.next = prevNode.next.next
        return true

    }

    /**
     * This method reverses the LL
     * @returns SinglyLinkedList
     */
    reverse(){
        /**
         * Base case, when index is out of bounds
         */
        if(!this.length)
            return this

        let prevPtr = null
        let ptr = this.head
        while(ptr){
            let temp = ptr.next;
            ptr.next = prevPtr;
            prevPtr = ptr;
            ptr = temp
        }
        this.tail = this.head
        this.head = prevPtr
        return this

    }

    /**
     * this method will traverse all the elements of the linked list
     */
    traverse(){
        let ptr = this.head;
        while(ptr){
            console.log(ptr.value)
            ptr = ptr.next
        }
    }



}

let sllObject = new SinglyLinkedList()

/**
 * PUSH method
 */
//add items to the list
sllObject.push(10)
sllObject.push(20)
sllObject.push(30)

/**
 * UNSHIFT method
 */
sllObject.unShift(5)
sllObject.unShift(190)

/**
 * SHIFT method
 */
// sllObject.shift()
// sllObject.shift()
// sllObject.shift()

/**
 * POP method
 */
// sllObject.pop()
// sllObject.pop()
// sllObject.pop()

/**
 * Search element based on value
 */
// const elementExist = sllObject.searchNode(20)
// console.log({elementExist})

/**
 * GET method
 */
const nodeFound = sllObject.get(2)
console.log({nodeFound})

/**
 * SET method
 */
const elementSet = sllObject.set(111,0)
console.log({elementSet})

/**
 * REMOVE method
 */
const elementRemoved = sllObject.remove(4)
console.log({elementRemoved})

/**
 * INSERT method
 */
// const elementInserted = sllObject.insert(133,3)
// console.log({elementInserted})

/**
 * TRAVERSE method
 */
//traverse the linked list
sllObject.traverse()
sllObject.reverse()
sllObject.traverse()
