let todoList = [];
function remember(task){
    todoList.push(task);
}

function getTask(){
    todoList.pop();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

remember("groceries");
remember("Watching TV");
remember("Walking");
console.log(todoList);
rememberUrgently("studying");
console.log(todoList[0]);

console.log(todoList.indexOf("Walking"));

let x = [1,2,3,2,1];

console.log(x.indexOf(2));
console.log(x.lastIndexOf(2));

let y = [0,1,2,3,4];
console.log(y.slice(2,4));
console.log(y.slice(2));
console.log(y.slice());


function remove(array, index){
    return array.slice(0, index).concat(array.slice(index+1));
}

console.log(remove(y,2));