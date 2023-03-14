const range = (start , end, step) => {
    let arr = [];
    if (step === undefined){
        return range(start,end,1);
    }
    if(start < end){
        for(let i = start; i <= end; i+=step){
            arr.push(i);
        }
    } else{
        for(let i = start; i >= end; i-=step){
            arr.push(i);
        }
    }

    return arr;
   
}; 

function sum(numbers){
    let sum = 0;
    for (let num of numbers){
        sum += num;
    }
    return sum;
}

console.log(sum(range(10,3)));