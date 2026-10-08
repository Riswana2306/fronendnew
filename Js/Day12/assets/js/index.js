
// Task1

let numbers = [10, 20, 30, 40, 50];

let result = numbers.map(function(number) {
    return number * 2;
});

console.log(result);

// Task2
let values = [10, 15, 20, 25, 30, 35, 40];
let restore=values.filter(function(number){
    return number%2===0;
})
console.log(restore);


// Task3
let number = [10, 25, 35, 50, 60];
let value =number.find(function(number){
    return number>30
})
console.log(value);

// Task4
let students = [

{ id: 1, name: "Arun", mark: 75 },

{ id: 2, name: "Priya", mark: 90 },

{ id: 3, name: "Kumar", mark: 65 }

];
let studentv=number.find(function(student){
    return student.id===2
})
console.log(studentv);

// Task5
let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let role = employees.filter(function(employee) {
    return employee.salary >= 30000;
});

console.log(role);

// Task7

let employeess = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let names = employees.map(function(employee) {
    return employee.name;
});

console.log(names);


    

let prices = [100, 200, 300, 400];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total);

// Task 8

let marks = [75, 80, 35, 90, 65];

let below40 = marks.some(function(mark) {
    return mark < 40;
});

let above35 = marks.every(function(mark) {
    return mark >= 35;
});

console.log(below40);
console.log(above35);


// Task9

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

for (let skill of skills) {
    console.log(skill);
}


// TAsk10

let student = {
    name: "Arun",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
};

for (let key in student) {
    console.log(key, student[key]);
}