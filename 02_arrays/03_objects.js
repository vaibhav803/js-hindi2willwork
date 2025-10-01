//objects

//singleton

//Object.create()


// object literals

const mySym = Symbol("key1")



const Jsuser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym] : "key1",
    age: 18,
    location: "jaundipur",
    email: "h@mc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);

Jsuser.age = 20

// Object.freeze(Jsuser)

Jsuser.age = 30

console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("hello");
    
}

Jsuser.greetingTwo = function () {
    console.log(`Hello sir here is your ${this["full name"]}`);
    
}

console.log(Jsuser.greeting());

console.log(Jsuser.greetingTwo());


console.log(Jsuser);






