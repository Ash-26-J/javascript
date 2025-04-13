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
//if

const frbd = [11,22,3,66,55,66,44];
const frbdric =frbd.filter((num)=> {
    if(num > 4){
        frbd.push(num)
    }
   return  num >22
})
console.log(frbdric);
//
const books =[
    {
        title: 'dbms', publisher: "oswal",publish:2001
    },
    {
        title: 'os', publisher: "mcgrawhil",publish:1889
    },
    {
        title: 'js', publisher: "mc grawhill",publish:2009
    },
    {
        title: 'npm', publisher: "hc hills",publish:2001
    },
    {
        title: 'cloud', publisher: "hc hills",publish:2001
    },
]
const book =books.filter((bk)=>{
    if(bk.publish === 2001)
    {
        return bk.publish 
    }
})
console.log(book);
//similarly
const booko =books.filter((bk)=>{
    if(bk.title === 'os')
    {
        return bk.title
    }
})
console.log(booko);
