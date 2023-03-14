const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base; 
    }
    return result;
};

let result = power(2,5);
console.log(result);

const square1 = (x) => {
    return x * x;
};

const square2 = x => x*x;

result = square2(10);
console.log(result);

const horn = () => {
    console.log("HAHAHAHAHHAH");
};

horn();

function greet(name){
    console.log("Hello " + name);
}

greet("Harry");
console.log("Bye!");

// function chicken(){
//     return egg();
// }

// function egg(){
//     return chicken();
// }

// console.log(chicken());

function square3(x){
    return x * x;
}

console.log(square3(4, "abebe", "ishis"));

function minus(a,b){
    if (b === undefined){
        return -a;
    }
    else{
        return a-b;
    }
}

console.log(minus(10));
console.log(minus(10,5));

function power3(base, exponent = 2){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power3(2, 5));