/* GENERAL TYPES OF DATA STRUCTURES */

// ARRAY - Ordered list of data, duplicates allowed
// SET - Unodered list of data, no duplicates
// OBJECT - Unordered key-value pairs of data
// MAP - key-value pairs of ordered, iterable data

/* ARRAYS -
1. Insertion order is kept
2. Element accessed via index (n[i])
3. Iterable (you can use a for loop)
4. Size/length adjusts dynamically
5. Duplicate values are allowed
6. Deletion and finding elements can require "extra work"
*/

//Playing with arrays

const names = ['Max', 'Sam', 'Valeera', 'Chance'];
//Iterable
for(let i = 0; i < names.length; i++) {
    //run some code here
}

//grows and shrinks as needed
names.push('New Name');

//iterates through the array to find where this value is true
//finding and deleting specific values is performance intensive
names.find(el => el === 'Valeera');


/* SETS -
1. Insertion order is NOT stored/memorized
2. Element access and extraction via method
3. Iterable (but not consistent because order can change)
4. Size/length adjusts dynamically
5. Duplicate values are NOT allowed
6. Deletion and finding elements is trivial and fast
*/

//Playing with sets

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const el of ids) {
    //will not show the second 1 since they only store unique values
    console.log(el);
}

//Quick way to check whether a value exists in a set
console.log(ids.has('abc'));

//Very easy to delete things
ids.delete('bb2');

//ARRAYS VERSUS SETS

/* Arrays -
1. You can always use arrays
2. Must-use if you want duplicates or order matters

Sets -
1. Only usable if order does not matter and need unique values
2. Can simplify data access - the more data the bigger the advantage
*/


/* OBJECTS
1. Unordered key-value pairs of data
2. Element access via key (property name)
3. Not iterable
4. Keys are unique, values are not unique
5. Keys have to be strings, numbers or symbols (cannot be objects or arrays)
6. Can store data (properties) and functionality (methods)
*/

//Playing with Objects
const person = {
    name: 'Chance',
    age: 29,
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

//easy to add new properties and delete existing properties
person.lastName = 'Croft';

delete person.age;


/* MAPS -
1. Ordered key-value pairs of data
2. Element access via key
3. Iterable (you can use for loop)
4. Keys are unique, values are not
5. Keys can be anything (including reference values like arrays)
6. Pure data storage optimized for data access (lacks the flexibility of objects in favor of data storage)
*/

//Playing with maps
const resultData = new Map();

//adding data is simple
resultData.set('average', 1.53);
resultData.set('lastResult', null);

const country = {
    name: 'Germany',
    population: 82
};

//can use objects as the key
resultData.set(country, 1.3);

//easy to delete data via the key
resultData.delete(country);

/* OBJECTS VERSUS MAPS
Objects -
1. Very versatile/easy to use
2. Must-use if you want extra functionality

Maps-
1. Focused on data storage
2. Can simplify and improve data access compared to objects
*/