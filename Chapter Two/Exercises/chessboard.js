let tiles = "";
let character;
let count = 0;
let size = Number(prompt("Enter grid size"));
if( size % 2 !== 0){
    let width = Math.ceil(size/2);
    for (i=1; i<=size; i++){
        for(let j = 0; j < width; j++){
            if(i % 2 == 0){
                if(j == width - 1){
                    tiles += "#\n"; 
                }else{
                    character = "#" + " ";
                    tiles += character;
                }
                
            } else{
                if(j == width - 1){
                    tiles += "\t\n"; 
                }
                else{
                    character = " " + "#";
                    tiles += character;
                }
               
            }
    
            // if(count == width){
            //     tiles += "\n";
            //     count = 0;
            // }
        }
    }     
}
else{
    for (i=1; i<=size; i++){
        for(let j = 0; j < size/2; j++){
            if(i % 2 == 0){
                character = "#" + " ";
                tiles += character;
                count++;
            } else{
                character = " " + "#";
                tiles += character;
                count++;
            }
    
            if(count == size/2){
                tiles += "\n";
                count = 0;
            }
        }
    }
}

    
console.log(tiles);

