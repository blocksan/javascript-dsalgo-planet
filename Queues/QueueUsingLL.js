/**
    * Queue implementation using Linked List
    * FIFO principal has to be maintained in the Linked List
    * Big O
    * Insertion   -   O(1)
    * Removal     -   O(1)
    * Search      -   O(n)
    * Access      -   O(n)    //access time is not better than array implementation, but queue main aim is not to provide better access time.
*/

 /**
  * We will be creating our Node
  */
 class Node{
     constructor(value){
         this.value = value;
         this.next = null
     }
 }

 /**
  * Linked List DS
  */

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * Enqueue => Inserting an item to the queue, always to the end
     * As adding items to the end, will make sure that we dont have to traverse the Linked List making the 
     * time complexity for adding an item O(1)
     */
    enqueue(value){
        let newNode = new Node(value);
        if(!this.tail){
            this.tail = this.head = newNode;
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length +=1
        return newNode.value
    }

    /**
     * Dequeue => Removing an item from the queue, always from the head
     * As removing items from the head, will make sure that we dont have to traverse the Linked List making the 
     * time complexity for removing an item O(1)
     */
    dequeue(){
        if(!this.head){
            return null
        }else{
            const temp = this.head
            this.head = this.head.next
            this.length -=1
            return temp.value
        }

    }

}

const queue = new Queue()
/**
 * Enqueue operation
 */
console.log('#########ENQUEUE##########')
console.log(queue.enqueue(1))   //1
console.log(queue.enqueue(2))   //2
console.log(queue.enqueue(3))   //3
console.log(queue.enqueue(4))   //4
console.log(queue.enqueue(5))   //5

/**
 * Dequeue operation
 */
console.log('#########DEQUEUE##########')
console.log(queue.dequeue())    //1
console.log(queue.dequeue())    //2
console.log(queue.dequeue())    //3
console.log(queue.dequeue())    //4
console.log(queue.dequeue())    //5
console.log(queue.dequeue())    //null

