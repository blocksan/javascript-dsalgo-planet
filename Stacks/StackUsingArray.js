/**
 * Stack is Abstract data structure type which means it just says how to implement the data structure
 * We can implement the stack behaviour i.e LIFO principal using multiple data structure
 * 1. Array
 * 2. Linked List
 * 3. Two queues
 */

/**
 * Inbuilt data structure Array can be used to show the LIFO behaviour
 */

let array = []


/**
 * Push/Pop implementation of queue using array is not very efficient,
 * As after every push/pop array has to recalculcate the indexes and which is O(n) 
 * Big O
 * Insertion   -   O(n)
 * Removal     -   O(n)
 * Search      -   O(n)
 * Access      -   O(1)
 */
/**
 * PUSH operation - Inserting elements
 */
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

/**
 * POP operation - Removing elements which was inserted last
 */
array.pop(); //5
array.pop(); //4
array.pop(); //3
array.pop(); //2
array.pop(); //1
array.pop(); // undefined


/**
 * UNSHIFT/SHIFT to implement stack using array is similar to PUSH/POP,
 * As every time we insert element, it will be at the beginning of the array and re-indexing will be required
 * And removing element will take place from the beginning of the array, where re-indexing is required. 
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
array.SHIFT(); //5
array.SHIFT(); //4
array.SHIFT(); //3
array.SHIFT(); //2
array.SHIFT(); //1
array.SHIFT(); // undefined

/**
 * Still these two way of implementing stack using inbuilt array is not efficient, as we might be creating 10000 element array,
 * then after deletion or insert re-indexing of the elements is required. Where in Stack PUSH/POP should happen at O(1)
 * So we will implementing our own Stack implementation using Linked List in next section.
 */

