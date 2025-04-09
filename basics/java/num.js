const num= 100

const balance = new Number(100)

console.log(balance.toString().length);


console.log(balance.toFixed(1));

const oth = 23.90
console.log(oth.toPrecision(3));

const hun =10000000
console.log(hun.toLocaleString('en-IN'));


//Math

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.pow(2,6));

console.log((Math.random()*10)+1);

const min =1
const max =20
console.log(Math.round(Math.random() * (max - min + 1))+min );


