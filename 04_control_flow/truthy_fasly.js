const userEmail = "h@hitesh.ai"

// if (userEmail){
//     console.log("Got user email");
    
// } else {
//     console.log("Dont have user email");
    
// }


// falsy values


// false,0, -0, Bigint 0n ,NaN, undefined, null, ""



// truthy values

// 1, true, [],"0",'false',' ',{},function(){},


const arr = []

// if (arr.length == 0){
//     console.log("empty");
    
// }

// const EmptyObj = {}

// if (Object.keys(EmptyObj).length == 0){
//     console.log("zero");
    
// }


// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15

val1 = null ?? 10 ?? 20


console.log(val1);


//Ternary operator


// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");

