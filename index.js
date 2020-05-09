 // This is my first JavaScript Code
/* Chapter 1 - Browsers
 console.log('Hello World');
*/

/* Chapter 2 - Variables
let name = 'Mosh';
console.log(name);

// Cannot be reserved keyword for naming the variables
// Should be meaningful
// Cannot start with the number (1name)
// Cannot contain a space of hyphen(-)
// Are case-sensitive

let firstName = 'Mosh';
let lastName = 'H';
*/

/* Chapter 3 

const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

// Cannot reassign a constant

*/

/* Chapter 4  - Primitives/Value Types
let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; //Or false // Boolean Literal
let firstName = undefined; // If nothing is defined it is considered undefined
let selectedColor = null; // Explicitly clears the value of variables
*/

/* Chapter 5 -Dyanmic Typing 
let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; //Or false // Boolean Literal
let firstName = undefined; // If nothing is defined it is considered undefined
let selectedColor = null; // Explicitly clears the value of variables

// Js is a dynamic language - the type of the variable is determined at runtime
// Undefined is both a type and value
*/


/* Chapter 6 - Objects
// Objects, arrays and functions

let person = {
    name: 'Mosh',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation - Helps in dynamic allocation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);
*/

/* Chapter 7 - Arrays 
// When dealing with list we use array to store that list
// Array is a data structure we used to represent a list of items
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);
*/

/* Chapter 8 - Functions
// Set of statements that performs a task or calculates a value

function greet(name, lastName) // name is the parameter of the greet function
{
    console.log("Hello " + name + ' ' + lastName);
}

greet('John','Smith'); // john is an argument of the greet function 

// Shows undefined for lastName as default value in Js is undefined
*/

/* Chapter 9 - Types of Functions */
// Performing a task
function greet(name, lastName) // name is the parameter of the greet function
{
    console.log("Hello " + name + ' ' + lastName);
}

// Calculating a value
function square(number)
{
    // var twice = number * number;
    // console.log(twice);
    return number * number;
}

greet('John','Smith'); // john is an argument of the greet function 
console.log(square(2)); // There are two function calls in this statement
// square(2) is one function call and console.log() is another function call
// Coz there is ()

