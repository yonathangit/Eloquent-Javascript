let total = 0, count = 1;
while(count <= 10){
    total += count;
    count++;
}
console.log(total);

for (let i = 0; i < 10; i++){
    console.log(i);
}

function repeatLog(n){
    console.log("================================");
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}

repeatLog(4);

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

// repeat(10, console.log);

let labels = [];
repeat (5, jk => labels.push(`Unit ${jk + 1}`));
console.log(labels);