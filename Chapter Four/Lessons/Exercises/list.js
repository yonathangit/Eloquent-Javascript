
function arrayToList(arr){
    let list = null;
    for (let i = (arr.length - 1); i >= 0; i--){
        list = { 
            value: arr[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list){
    let arr = [];
    while(list.rest !== null){
        arr.push(list.value);
        list = list.rest;
        if(list.rest == null){
            arr.push(list.value);
        }
    }

    return arr;
}

function prepend(value, list){
    return {
        value: value,
        rest: list
    };
}

function nth(list, number){
    let count = 0;
    while(list.rest !== null){
      if(number == 0)
        return list;
      else if(count == number-1){
        return list.rest;
      }
      else{
        list = list.rest;
        count++;
      }
    }  

}




let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

