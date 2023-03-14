console.log("Z" < "a")
console.log(5 == 5)
console.log(5 != 6)
console.log(5 <= 7)
console.log(7 >= 10)

//logical operators
console.log(1 + 1 == 2 && 10 * 10 > 50)
/*
    1 + 1 == 2 && 100 > 50
    2 == 2 && 100 > 50
    True && True
    True
*/

//ternary operators
console.log(true? 1 : 2)
console.log( false ? 3 : 4)

//automatic type conversion
console.log(8 * null) //0
console.log("5" - 1 ) //4
console.log("5" + 1) //51
console.log("five" * 2) //NaN
console.log(false == 0)

console.log(null == 0) // false
console.log(null == undefined) // true
console.log(0 == false) // true
console.log("" == false) // true


console.log("!"|| "user")
console.log("user" && "user1")
