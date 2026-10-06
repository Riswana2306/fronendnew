// / TASK 1 – GLOBAL AND FUNCTION SCOPE
// ================================

let company = "ABC Technologies";

function showEmployee() {
    let employee = "Arun";

    console.log(company);
    console.log(employee);
}

showEmployee();

// console.log(employee); // ReferenceError


// ================================
// TASK 2 – BLOCK SCOPE
// ================================

if (true) {
    let age = 25;
    const city = "Chennai";

    console.log(age);
    console.log(city);
}

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError


// var example

if (true) {
    var number = 30;

    console.log(number);
}

console.log(number);


// ================================
// TASK 3 – HOISTING
// ================================

// var
console.log(a);
var a = 10;


// let
// console.log(b); // ReferenceError
let b = 20;


// Function Hoisting
greet();

function greet() {
    console.log("Welcome to JavaScript");
}


// ================================
// TASK 4 – CLOSURE COUNTER
// ================================

function createCounter() {
    let count = 0;

    function counter() {
        count++;
        console.log(count);
    }

    return counter;
}

let result = createCounter();

result();
result();
result();


// ================================
// TASK 5 – CALLBACK CALCULATOR
// ================================

function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(20, 10, add);
calculate(20, 10, subtract);