const square = function(x){
    return x * x;
};

const makeNoise = function(){
    console.log("Pling!");
}

const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power(2, 10));

makeNoise();
console.log(square(12));