// TASK 3 – LOOP STUDENT NAMES
let students = ["Arun", "Kumar", "Priya", "Ravi", "Divya"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// TASK 4 – TOTAL MARKS
let marks = [80, 70, 90, 60, 85];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log("Total =", total);


// TASK 5 – ARRAY MULTIPLICATION
let numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}let fruits=["Apple","Manga","orange","Banana"];
console.log(fruits[3]);

fruits[2]="jackfuit"
console.log(fruits);

for (let a=0;a>fruits.length-1;a--){
    console.log(a);
    
}


let names=["Riswana","Safrosh","afrin","Nasira","Bazeer"]
console.log(names[0]);
console.log(names)
names[0]="Krishna"
console.log(names);


// TASK 6 – STUDENT OBJECT

let student = {
    name: "Arun",
    age: 20,
    course: "JavaScript",
    city: "Chennai"
};

console.log(student.name);
console.log(student.course);


// TASK 7 – UPDATE EMPLOYEE

let employee = {
    name: "Arun",
    salary: 25000,
    role: "Developer"
};

employee.salary = 30000;

console.log(employee);


// TASK 8 – ADD NEW PROPERTY

let product = {
    name: "Laptop",
    price: 50000
};

// Task 9

product.brand = "Dell";

console.log("Product Name:", product.name);
console.log("Brand:", product.brand);

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

for (let key in car) {
    console.log(key, car[key]);
}

// task 10
// let students = [
//     {
//         name: "Arun",
//         mark: 80
//     },
//     {
//         name: "Priya",
//         mark: 90
//     },
//     {
//         name: "Kumar",
//         mark: 75
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log("Name:", students[i].name);
//     console.log("Mark:", students[i].mark);
// }