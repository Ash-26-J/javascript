console.log(Date());

let date = new Date()
console.log(date);
console.log(date.toLocaleDateString());

let create = new Date("2023-01-23")
console.log(create.toLocaleString());
// time stamp

let timestamp = Date.now()
console.log(timestamp);
console.log(create.getTime());
console.log(Math.round(Date.now()/1000));

let newd = new Date()
console.log(newd.getMonth());
console.log(newd.getDay());

newd,toLocaleDateString('default',{weekday: "long",})