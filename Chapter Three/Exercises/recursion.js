function isEven (num){
    if(num < 0){
        console.log("Please input a positive whole number!")
    }
    else{
        if(num == 0)
          return true;
        else if (num == 1)
           return false;
        else 
          return isEven(num - 2);
    }
    
    // switch (num){
    //     case (num < 0):
    //         console.log("Please input a positive whole number!");
    //         break;
    //     case (num == 0):
    //         return true;
    //     case (num == 1):
    //         return false;
    //     default:
    //         return isEven(num-2);
    // }
}

console.log(isEven(75));

