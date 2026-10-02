

// Array 
// 1
let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);
console.log(fruits[2]);

fruits[2] = "Papaya";

console.log(fruits);
console.log(fruits.length);


// 2
let numbers = [10, 20, 30];

console.log(numbers);
console.log(numbers[0]);

numbers[0] = 100;

console.log(numbers);
console.log(numbers.length);


// 3
let cities = ["Chennai", "Coimbatore", "Madurai"];

console.log(cities);
console.log(cities[0]);

cities[0] = "Trichy";

console.log(cities);
console.log(cities.length);


// 4
let colors = ["Blue", "Red", "Green"];

console.log(colors);
console.log(colors[1]);

colors[1] = "Sky blue";

console.log(colors);
console.log(colors.length);


// 5
let animals = ["Dog", "Cat", "Lion"];

console.log(animals);
console.log(animals[0]);

animals[0] = "Tiger";

console.log(animals);
console.log(animals.length);


// 6
let car = ["BMW", "Audi", "Toyota"];

console.log(car);
console.log(car[1]);

car[1] = "Honda";

console.log(car);
console.log(car.length);


// 7
let subjects = ["Tamil", "English", "Maths"];

console.log(subjects);
console.log(subjects[2]);

subjects[2] = "Science";

console.log(subjects);
console.log(subjects.length);


// 8
let countries = ["India", "Japan", "China"];

console.log(countries);
console.log(countries[0]);

countries[0] = "Dubai";

console.log(countries);
console.log(countries.length);

// 9

let drinks = ["tea", "coffee", "milk"];
console.log(drinks);
console.log(drinks[0]);
drinks[1] = "milk";
console.log(drinks);
console.log(drinks.length);

// 10

let sports = ["cricket", "football", "tennis"];
console.log(sports);
console.log(sports[0]);
sports[0] = "hockey";
console.log(sports);
console.log(sports.length);


// 11


let birds = ["crow", "parrot", "eagle"];
console.log(birds);
console.log(birds[2]);
birds[0] = "peacock";
console.log(birds);
console.log(birds.length);

// 12

let states = ["TN", "Kerala", "Karnataka"];
console.log(states);
console.log(states[2]);
states[2] = "Ap";
console.log(states);
console.log(states.length);

// 13

let vegetables = ["carrot", "potato", "tomato"];
console.log(vegetables);
console.log(vegetables[2]);
vegetables[2] = "onion";
console.log(vegetables);
console.log(vegetables.length);


// 14

let weekdays = ["Monday", "Tuesday", "Wednesday"];
console.log(weekdays);
console.log(weekdays[2]);
weekdays[0] = "Sunday";
console.log(weekdays);
console.log(weekdays.length);

// 15

let month = ["January", "February", "March"];
console.log(month);
console.log(month[2]);
month[2] = "may";
console.log(month);
console.log(month.length);


// 16

let language = ["Tamil", "English", "Hindi"];
console.log(language);
console.log(language[2]);
language[2] = "malayalam";
console.log(language);
console.log(language.length);




// object
// 1

let person = {
    name: "Safrosh",
    age: 21,
    job: "IT"
};

console.log(person);
console.log(person.age);

person.age = 22;

console.log(person);
console.log(person);
console.log(Object.keys(person).length);


// 2

// let cars = {
//     brand: "BMW",
//     model: "X5",
//     year: 2023
// };

// console.log(cars);
// console.log(cars.brand);

// cars.brand = "Audi";

// console.log(cars);
// console.log(cars);
// console.log(Object.keys(cars).length);

// 3
let fruit = {
    name: "Apple",
    color: "Red",
    price: 100
};

console.log(fruit);
console.log(fruit.name);

fruit.name = "Mango";

console.log(fruit);

// 4


let bike = ["Honda", "Yamaha", "RE"];

console.log(bike);
console.log(bike[2]);

bike[2] = "TVS";

console.log(bike);
console.log(bike.length);



// 5
let places = ["Chennai", "Salem", "Erode"];

console.log(places);
console.log(places[2]);

places[2] = "Trichy";

console.log(places);
console.log(places.length);


// 6


let student = {
    name: "Riswana B",
    age: 22,
    city: "Chennai"
};

console.log(student);
console.log(student.name);

student.name = "Afrin";

console.log(student);
console.log(Object.keys(student).length);

// 7

let book = {
    title: "JavaScript",
    author: "John",
    price: 1200
};

console.log(book);
console.log(book.author);

book.title = "Python";

console.log(book);
console.log(Object.keys(book).length);

// 8

let mobile = {
    brand: "Samsung",
    model: "S24",
    price: 64000
};

console.log(mobile);
console.log(mobile.model);

mobile.price = 46000;

console.log(mobile);
console.log(Object.keys(mobile).length);

// 9

let TV = {
    brand: "LG",
    model: "85",
    price: 80100
};

console.log(TV);
console.log(TV.price);

TV.price = 89000;

console.log(TV);
console.log(Object.keys(TV).length);

// 10
let AC = {
    model: "AI future",
    brand: "lloyd",
    price: 99000
};

console.log(AC);
console.log(AC.brand);

AC.price = 100000;

console.log(AC);
console.log(Object.keys(AC).length);

// 11

// let laptop = {
//     brand: "Dell",
//     ram: 8
//     rate: 85000
// };

// console.log(laptop);
// console.log(laptop.ram);

// laptop.ram = "16GB";

// console.log(laptop);
// console.log(Object.keys(laptop).length);


// 12

let employee = {
    name: "Safrosh",
    salary: 40100,
    department: "IT"
};

console.log(employee);
console.log(employee.salary);

employee.salary = 95000;

console.log(employee);
console.log(Object.keys(employee).length);

// 13

let college = {
    name: "Presidency",
    city: "Chennai",
    type: "Government"
};

console.log(college);
console.log(college.name);

college.name = "Government College";

console.log(college);
console.log(Object.keys(college).length);

// 14
let movie = {
    name: "Mannadi",
    hero: "Soori",
    year: 2026
};

console.log(movie);
console.log(movie.hero);

movie.hero = "Surya";

console.log(movie);
console.log(Object.keys(movie).length);


// // 15

// let bike = {
//     brand: "Honda",
//     price: "Shine",
//     model: 102500
// };

// console.log(bike);
// console.log(bike.model);

// bike.model = "Activa";

// console.log(bike);
// console.log(Object.keys(bike).length);


// 16

let food = {
    name: "Biryani",
    type: "Non Veg",
    price: 250
};

console.log(food);
console.log(food.name);

food.name = "Mutton Biryani";

console.log(food);
console.log(Object.keys(food).length);

// 17
let phone = {
    brand: "Apple",
    model: "iPhone 14",
    storage: "128 GB"
};

console.log(phone);
console.log(phone.storage);

phone.storage = "256 GB";

console.log(phone);
console.log(Object.keys(phone).length);


// 18

// let student = {
//     name: "Riswana",
//     course: "BA",
//     year: 2026
// };

// console.log(student);
// console.log(student.course);

// student.course = "BCA";

// console.log(student);
// console.log(Object.keys(student).length);