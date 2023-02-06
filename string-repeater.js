const prompt = require("prompt-sync")({ sigint: true });

let str = String(prompt("Enter a string: "));
console.log(str);

let count = "";

while (count.length < 10) {
  count += str;
  console.log(count);
}
