const tinder =  new Object()

tinder.name = "12525",
tinder.name = "sam",
tinder.age=21
tinder.log = false
/*
console.log(tinder);

 /*
const reguse = {
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
          first:"george",
          last: "windsor"   
         }
    }
}
console.log(reguse.fullname?.userfullname.first);
*/
const key1 ={1:"a",2:"b"}
const key2 = {3:"a", 4:"b"}
const aj = {5:"d",6:"d"}
const obj = {...key1,...key2}
//const obj = Object.assign({},key1,key2,aj) //{} empty array generally its (key1,key2)
console.log(obj);

//database

const user= [
    {
        id:11,
        email:"dkkdk",
    
    },
]

console.log(user.email);
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));

console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('log'));// used to check wether that particular property is available or not
