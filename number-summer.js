const prompt = require('prompt-sync')({sigint: true}) 

let num = Number(prompt("Enter a number: "));
let sum = 0;

while(num !== 0){
    sum = sum + num; //sum += num;
    num = Number(prompt('Enter another number: '))
}

console.log("final sum:" + sum)