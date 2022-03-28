// This is a single line comment

/*  
    This is a multi
    line comment
*/

// A variable is a name/pointer for a value in memory

// There are 3 different ways to create a varaible in JS

// var keyword
// var a = 5;

// // let keyword
// let b = true;

// // const keyword
// // may not be reassigned HOWEVER they may be mutated
// const c = "hello world";

// console.log(a,b,c)

// a = (a * 9/5) + 32;

// console.log(Number.parseInt(a))

// const things = function(ligma, nuts) {
//     ligma = false;
//     return ligma === nuts;
// }

// const reasons = (bofa) => {
//     return bofa + " Alex got roasted"
// }

// let conidtionalFunc = (param) => {
//     if (param === true) {
//         return true;
//     } else if (param === false) {
//         return false;
//     } else {
//         return "Not a boolean"
//     }
// }

// conidtionalFunc(b)

// for (let i = 1; i <= Number; i += 1) {

// }

/* Fizzbuzz
    Given an intege, console log all numbers from 1 to n
    However, for numbers divisible by 3 console log Fizz instead
    For numbers divisible by 5 console log Buzz
    and for numbers divisible by both console log FizzBuzz
*/

const fizzbuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(20);