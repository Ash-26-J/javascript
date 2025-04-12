//to immideatly start the execution
(function dbms(){
    console.log("dbn");
    
})();

// global scope causes pollution most of the time in order to remove pollution we use iife

((nme) =>{
    console.log("hello"+nme);
    
}) ("george");