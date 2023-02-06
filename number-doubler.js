const prompt = require('prompt-sync')({sigint: true}) 

let num = Number(prompt("Enter a number: "));
count = 0
while(count <= 100){
     count += num * 2;        
}
console.log(count);
