//A program to write factorials (recursions)


function factorial(n){
    if (n == 0){
        return 1;
    }
    else {
        return factorial (n-1) * n;
    }
}

let x = factorial(4);
console.log(x);