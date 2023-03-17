function greaterThan(n){
    return m => m > n
}

console.log(greaterThan(10)(5));

function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}
function noisy(f){
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    };
}
let x = [1,2,3]
let fnc = noisy(Math.min);
fnc(...x);


function unless(test, then){
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});


["A","B","C"].forEach(l => console.log(l));

