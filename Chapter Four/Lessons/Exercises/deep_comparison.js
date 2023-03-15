function deepEqual(x,y){
      if(typeof x == "object" && typeof y == "object") {
        if(JSON.stringify(Object.keys(x)) == JSON.stringify(Object.keys(y))){
            for (let prop in x){
                if(x[prop] != y[prop]){
                    return false;
                }
            }
            return true;
        }
        else{
            return false;
        }
      }

      else{
        if(x !== y){
            return false;
        }
        else
            return true;
        
      }
}



let a = {
    value: 1,
    name: "Yoni"
};

let b = {
    value:1,
    name: "Yoni"
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// let obj = {
//     value: 1,
//     status: true
// }

// for(let prop in obj){
//     console.log(obj[prop]);
// }