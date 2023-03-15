function reverseArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    let temp;
    for (let i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - (i+1)];
        arr[arr.length - (i+1)] = temp;
    }

    return arr;
}

let x = [5,10,15,20,30,40,60,80];
console.log(reverseArray(x));
console.log(reverseArrayInPlace(x));

