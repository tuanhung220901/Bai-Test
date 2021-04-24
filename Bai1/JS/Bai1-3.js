import data from "./data.js";
let gender;
let favorite;
gender = prompt("hãy nhập vào 1 gender");
favorite = prompt("hãy nhập vào một favorite");
function findUserByGenderAndFavorite(gender,favorite){
    let isCheck = true;
    for(let i = 0; i < data.length; i++){
        if(data[i].gender == gender ){
            for(let  j = 0; j < data[i].favorites.length; j++){
                if(data[i].favorites[j] == favorite){
                    console.log(data[i].id);
                    console.log(data[i].name);
                    console.log(data[i].gender);
                    console.log(data[i].country);
                    console.log(data[i].phoneNumber);
                    console.log(data[i].favorites);
                    console.log(data[i].avatar);
                    isCheck = false;
                    break;
                }
            }
        }
        if(!isCheck){
            break;
        }
    }
    if(isCheck){
        console.log("không tìm thấy người đó!");
    }
}
findUserByGenderAndFavorite(gender,favorite);