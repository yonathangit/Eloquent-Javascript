let number = 0;
while (number <= 12){
    console.log(number);
    number = number + 2;
}


// let result = 1;
// let counter = 0;
// while (counter < 10){
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);


// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);

// console.log(yourName);
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1){
    result = result * 2;
}
console.log(result);

for (let current = 20; ; current = current + 1){
    if(current % 7 == 0){
        console.log(current);
        break;
    }
}


let weather = prompt("What is the weather like?");
switch (weather){
    case "rainy" : 
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress Lightly");
        break;
    case "cloudy":
        console.log("Go outside");
    default: 
        console.log("Unknown weather type!");
        break;    
}
