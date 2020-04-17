/**
 * Queue implementation using Linked List
 * LIFO principal has to be maintained in the Linked List
  * Big O
  * Insertion   -   O(1)
  * Removal     -   O(1)
  * Search      -   O(n)
  * Access      -   O(n)    //access time is not better than array implementation, but stack main aim is not to provide better access time.
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
 * Linked List DS : LIFO principal
 */

class Stack{
   constructor(){
       this.head = null
       this.tail = null
       this.length = 0
   }

   /**
    * PUSH => Inserting an item to the stack, always to the head
    * As adding items to the head, will make sure that we dont have to traverse the Linked List to the tail making the 
    * time complexity for adding an item O(1)
    */
   push(value){
       let newNode = new Node(value);
       if(!this.head){
           this.head = this.tail = newNode;
       }else{
           newNode.next = this.head
           this.head = newNode
       }
       this.length +=1
       return newNode.value
   }

   /**
    * POP => Removing an item from the stack, always from the head
    * As removing items from the head, will make sure that we dont have to traverse the Linked List making the 
    * time complexity for removing an item O(1)
    */
   pop(){
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

const stack = new Stack()
/**
* Push operation
*/
console.log('#########PUSH##########')
console.log(stack.push(1))   //1
console.log(stack.push(2))   //2
console.log(stack.push(3))   //3
console.log(stack.push(4))   //4
console.log(stack.push(5))   //5

/**
* Pop operation
*/
console.log('#########POP##########')
console.log(stack.pop())    //5
console.log(stack.pop())    //4
console.log(stack.pop())    //3
console.log(stack.pop())    //2
console.log(stack.pop())    //1
console.log(stack.pop())    //null

