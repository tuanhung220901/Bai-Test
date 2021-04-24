import data from "./data.js";

function compareNumbers(a, b) {
    return a - b;
}
for(let i = 0 ; i < data.length; i++){
    for(let j = 0; j < data.length; j++){
        if(data[i].favorites.length > data[j].favorites.length){
            let tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}
console.log(data);