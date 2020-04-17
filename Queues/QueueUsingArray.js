/**
 * Queue is Abstract data structure which means it just says how to implement the data structure
 * We can implement the queue behaviour i.e FIFO using multiple data structure
 * 1. Array
 * 2. Linked List
 * 3. Two stacks
 */

/**
 * Inbuilt data structure array can be used to show the FIFO behaviour
 */

 let array = []


 /**
  * PUSH/SHIFT implementation of queue using array is not very efficient,
  * As after every shift array has to recalculcate the indexes and which is O(n)
  * and similar reindexing will happen at PUSH
  * Big O
  * Insertion   -   O(n)
  * Removal     -   O(n)
  * Search      -   O(n)
  * Access      -   O(1)
  */
 /**
  * enqueue operation - Inserting elements
  */
 array.push(1);
 array.push(2);
 array.push(3);
 array.push(4);
 array.push(5);

 /**
  * dequeue operation - Removing elements which was inserted first
  */
 array.shift(); //1
 array.shift(); //2
 array.shift(); //3
 array.shift(); //4
 array.shift(); //5
 array.shift(); // undefined


 /**
  * UNSHIFT/POP implementation of queue using array is similar to PUSH/SHIFT,
  * As every time we insert element, it will be at the beginning of the array and re-indexing will be required
  * And removing element will take place from the end of the array, where re-indexing is required. 
  * Big O
  * Insertion   -   O(n)
  * Removal     -   O(n)
  * Search      -   O(n)
  * Access      -   O(1)
  * 
  */
  /**
  * enqueue operation - Inserting elements
  */
 array.unshift(1);
 array.unshift(2);
 array.unshift(3);
 array.unshift(4);
 array.unshift(5);

 /**
  * dequeue operation - Removing elements which was inserted first
  */
 array.pop(); //1
 array.pop(); //2
 array.pop(); //3
 array.pop(); //4
 array.pop(); //5
 array.pop(); // undefined

 /**
  * Still these two way of implementing queue using inbuilt array is not efficient, as we might be creating 10000 element array,
  * then after deletion or insert re-indexing of the elements is required. Where in Queue enqueu/dequeue should happen at O(1)
  * So we will implementing our own Queue implementation using Linked List in next section.
  */

