let caught = 5 * 5;
console.log(caught);

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

//prompt("Enter passcode");

console.log(Math.max(2,4));
console.log(Math.min(2,4));

//let theNumber = prompt("Give me a number:");
// if (!isNaN(theNumber)){
//     console.log("Your number is the square root of " + theNumber * theNumber);
// }
// else{
//     console.log("Hey!! Why didn't you give me a number?");
// }

let num = Number(prompt("Pick a number"));

if (num < 10){
    console.log("Small");
}
else if (num < 100){
    console.log("Medium");
}
else{
    console.log("Large");
}
