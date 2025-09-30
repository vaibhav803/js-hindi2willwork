// strings number boolean null undefined



//primitive types call by value


// strings,number,boolean,bigInt,null,undefined,symbol




//Non -primitive type

// array,function,object



const heroes = ["w","q","t"]

const myfunc = function hello(){
    console.log("hello")
}


const obj = {
    strings :"54",
    number : 22,
    boole : true
}


console.table(typeof myfunc);


// *********************************


// Stack (Primitive), Heap (Non-primitive)


let myname = "hitesh";

let another = myname;
another =  "changed";
console.log(myname);
console.log(another);



let user = {
    email: "lion@gmao",
    upi: "ybl"
}

let usertwo = user

usertwo.email = "h@fmsd.com"



console.log(user.email)
console.log(usertwo.email)



