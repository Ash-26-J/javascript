function s(){
    console.log("hello");
    console.log("this is js");
    console.log("jjj");
}
s()
num1=3
num2=4
function math(num1,num2){
     console.log( (num1+num2));
     return(num1+num2)
}
math(3,5)
const res = math(3,5)
console.log(res);

function login(username){
    if(username === undefined){
        console.log("please enter a user name:");
        
    }
    else{
        return username
    }
}

console.log(login("george"));

function addprice (...num){
     return num
}
console.log(addprice(200,300,400,500));
const user = {
    username:"hello",
    price:"999"

}
function handel(anyobject){

    console.log('user nameis'+anyobject.username+'price is'+anyobject.price);
    
}
handel(user)
//aaray
const arr = [200,40,300,500]
function get(getar){
    return getar[1]
}
console.log(get(arr));

if(true){
let a = 90
const b =60
var c =80
}