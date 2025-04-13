const coding=["js","ruby","java"]

coding .forEach((item) => {
    console.log(item);
    
}
)
// basics of filter
const fred = [11,22,3,66,55,66,44];
const fredric =fred.filter((num)=> num >22)
console.log(fredric);

//or
const frad = [11,22,3,66,55,66,44];
const fradric =fred.filter((num)=> {
   return  num >22
})
console.log(fradric);