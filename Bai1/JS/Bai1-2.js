import data from "./data.js";
let country;
country = prompt("Nhập vào tên quốc gia");
let count = 0;
function countUserFromCountry(country){
    for(let i = 0; i < data.length; i++){
        if(data[i].country == country){
            count++;
        }
    }
    if(count == 0){
        console.log("Không có người nào !");
    }
    else 
        console.log(count);
}
countUserFromCountry(country);