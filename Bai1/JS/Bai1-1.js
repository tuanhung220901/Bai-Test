import data from "./data.js";
//let $hung = JSON.parse(data);
//console.log(data);
let name;
name = prompt("nhập vào tên người bạn muốn tìm kiếm");
function findUserByName(name){
    let isCheck = true;
    for(let  i = 0; i < data.length; i++){
        if(data[i].name == name){
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
    if(isCheck){
        console.log("không tìm thấy tên người này");
    }
}
findUserByName(name);
