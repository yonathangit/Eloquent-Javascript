const countBs = word => {
    let letters = 0;
    for (let count = 0; count < word.length; count++){
        if(word[count] === "B")
            letters++;
    }

    return letters;
};


const countChar = ( word, char) => {
    let letters = 0;
    for (let count = 0; count < word.length; count++){
        if (word[count] === char)
            letters++;
    }

    return letters;
};

let x = countChar("Charles Babbage", "b");
console.log(x);