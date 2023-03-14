function wrapValue(n){
    return () => n;
}

let wrap1 = wrapValue(2);
console.log(wrap1());

let wrap2 = wrapValue(3);
console.log(wrap2());


function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(5);
console.log(twice(2));