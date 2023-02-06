const prompt = require('prompt-sync')({sigint: true}) 

let numX = Number(prompt("Enter first Number: "));
let numY = Number(prompt("Enter second Number: "));

let result = ""

if(numX % 2 !== numY % 2 || numX % 1 !== numY % 1){
    result = false
} else{ result = true}

while(result === false){
   
    numX = numX + 1;
    if(numX % 2 !== numY % 2 && numX % 1 !== numY % 1){
        result = false
    } else{ result = true}
    
}

console.log(result)
console.log(`${numX} is divisible by ${numY}`)