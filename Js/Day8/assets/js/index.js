// const evenNumber=(even)=>{
//     if(even%2===0){
//         return"even"
//     }
//     else{
//         return"not working"
//     }

// }
// console.log(evenNumber (900));


// let evennum=(even)=>{
//     if(even%2===0){
//     return"even"
//      }
//         else{
//             return"odd"

//         }
   
// }
// console.log(evennum (101));




// const getevenNumber=(arreven)=>{
//     for(let even=0;even<arreven.lego

//     )
// }







// Task1
function checkNumber(number){
    if(number%2===0){
    return"Even Number";
        
    }
else {
    return"Odd Number";
    
}
}
console.log(checkNumber(50));


// Task 2

function largeNumber(a,b ){
    if(a>b){
        return a;

    } else {
        return b;
    }
}
console.log(largeNumber(80,90));


// Task3
function checkVote(age){
    if(age>=18){
        return "Eligible For vote "
    } else{
        return"Not Eligible For Vote"
    }
}
console.log(checkVote(20));


// Task4
function getTotal(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(getTotal([10, 20, 30, 40, 50]));

// Task 5
function countEven(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven([10, 15, 20, 25, 30, 35, 40]))
