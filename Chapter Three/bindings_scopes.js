let x = 10;
if (true){
    var y = 20;
    var z = 30;
    console.log(y);
}

console.log(y);
console.log(z);


let n = 12;

const halve = function (n){
    return n / 2;
};

console.log(halve(100));
console.log(n);

const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ ingredientAmount } ${ unit } ${ name }`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(5);

// let launchMissiles = function(){
//     missileSystem.launch("Now")
// };
// if(safeMode){
//     launchMissiles = function(){

//     };
// }

function square (x){
    return x * x;
};

console.log("The future says: ", future());

function future(){
   return "There will be no flying cars!";
}