// let todoList = [];
// function remember(task){
//     todoList.push(task);
// }

// function getTask(){
//     todoList.pop();
// }

// function rememberUrgently(task){
//     todoList.unshift(task);
// }

// remember("groceries");
// remember("Watching TV");
// remember("Walking");
// console.log(todoList);
// rememberUrgently("studying");
// console.log(todoList[0]);

// console.log(todoList.indexOf("Walking"));

// let x = [1,2,3,2,1];

// console.log(x.indexOf(2));
// console.log(x.lastIndexOf(2));

// let y = [0,1,2,3,4];
// console.log(y.slice(2,4));
// console.log(y.slice(2));
// console.log(y.slice());


// function remove(array, index){
//     return array.slice(0, index).concat(array.slice(index+1));
// }

// console.log(remove(y,2));

// console.log("coconuts".slice(4));
// console.log("coconut".indexOf("u"));
// console.log("one two three".indexOf("ee"));


// console.log("   okay  \n  ".trim());

// console.log(String(6).padStart(3, "0"));


// let sentence = "My name is Yonathan Berhanu";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(" "));

// console.log("HA".repeat(5));

// let string = "abc";
// console.log(string.length);
// console.log(string[1]);


// function max(...numbers){
//     let result = -Infinity;
//     for (let number of numbers){
//         if(number > result)
//             result = number;
//     }
//     return result;
// }

// console.log(max(...y));

// let wordss = ["never", "fully"];
// console.log(["will", ...wordss, "understand"]);


// function randomPointOnCircle(radius){
//     let angle = Math.random() * 2 * Math.PI;
//     return {
//         x : radius * Math.cos(angle),
//         y : radius * Math.sin(angle)
//     }
// }

// console.log(randomPointOnCircle(2));

console.log(Math.random() * 2);
console.log(Math.floor(Math.random() * 10));

let {age} = {name: "Faraji", age: 23};
console.log(age);

let string = {
    squirrel : false,
    events : ["work", "touched trees", "pizza", "running"]
}

console.log(JSON.stringify(string));