// function printFarmInventory(cows, chickens){
//     let cowString = String(cows);
//     while(cowString.length < 3){
//         cowString = "0" + cowString;
//     }
//     let chickenString = String(chickens);
//     while(chickenString.length < 3){
//         chickenString = "0" + chickenString;
//     }

//     console.log(`${cowString} cows`);
//     console.log(`${chickenString} chickens`);
// }

// printFarmInventory(1, 13);

// function printZeroPaddedWithLabel(number, label){
//     let numberString = String(number);
//     while(numberString.length < 3){
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs){
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }

// printFarmInventory(10,200,9);

const zeroPad = (number, width) =>{
    let string = String(number);
    while(string.length < width){
        string = "0" + string;
    }

    return string;
};

const printFarmInventory = (cows, chickens, pigs) => {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
};

printFarmInventory(10, 6, 200);