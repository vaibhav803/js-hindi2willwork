//Dates


let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

const othertime = new Date();

let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(othertime.getTime());






// console.log(othertime)
// console.log();
// console.log();

// let myCreatedDate = new Date(2025,0,14,5,7)
// let myCreatedDate = new Date(2025,0,14)
let myCreatedDate = new Date("01-14-2025")

console.log(myCreatedDate.getTime()/1000);


// console.log(myCreatedDate.toLocaleString());


console.log(Math.floor(Date.now()/1000));

let date = new Date()
console.log(date.getFullYear())
console.log(date.toLocaleString('default',{
    weekday: "long",

}))


