const user ={
    username:"ashish",
    price:999,
      
    welcome: function (){
        console.log('welcome to website'+this.username);
        
    }
}
user.welcome()
user.username ="sam"
user.welcome()
// browser -- window object

const hi = () =>{
    console.log(this);
    
}

//arrow
hi()
const add = (num1,num2) =>  (num1+num2)
//add(3,4)
console.log(add(3,4));
