// Arrays
const fruits = ['orange', 'apple', 'grapes', 'pineapple', 'guava',];
const mixed = ['tony', 'elroy', 'aditya', 'manas', 98, 87, 34, 67];

console.log(fruits);
console.log(mixed);

const arr = new Array(34, 213, 24, 927, 79, 235);

console.log(arr.length);
console.log(Array.isArray(arr));
console.log(Array.isArray('arr'));
arr[0] = 'Howard';
console.log(arr);
let arrelement = arr[0];
console.log('element :', arrelement)


const marks = [64, 23, 34, 97, 79, 55];

console.log(marks);
let value = marks.indexOf(34);
console.log(value);

// Modifying arrays
marks.push(35); // Adds new elements to the end of an array, and returns the new length
marks.unshift(35); // Adds new elements to the beginning of an array, and returns the new length
marks.pop(55);  // Removes the last element of an array, and returns that element
marks.shift(55); // Removes the first element of an array, and returns that element
marks.slice(1, 2); // Selects a part of an array, and returns the new array
marks.splice(1, 2); // Adds/Removes elements from an array
marks.reverse(); // Reverses the order of the elements in an array
// let marks3 = [84,48];
// marks = marks.concat(marks3);
console.log(marks);

// Objects
let myobj = {
    names: 'Tony',
    isActive: true,
    marks: [26, 78, 96, 86, 75]
}
console.log(myobj);
console.log(myobj.isActive);
console.log(myobj['names']);
console.log(myobj.marks);