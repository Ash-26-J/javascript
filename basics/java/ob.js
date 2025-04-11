
const symbol = Symbol("key1")


const js ={
    name:"ash",
    age:20,
    location:"jaipur",
    login:"monday",
    [symbol]:"mykey1",
    "fullname":"jji"
    
}
console.log(js["name"]);
js.greet = function(){
    console.log('hello$(this.name)');
    
}

/*console.log(js[symbol]);
console.log(typeof js.symbol);
console.log(js);
js.name ="george"*/

//functions
// symbol always []
//generally . as objects