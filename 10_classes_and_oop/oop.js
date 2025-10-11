const user = {
    username: "hitesh",
    loginCount: 8,
    signedin: true,

    get: function(){
        console.log(this);
        
    }
}


// console.log(user.username);

console.log(user.get());







// function User(username,logincount,isLoggedIn){
//     this.username = username
//     this.logincount = logincount
//     this.isLoggedIn = isLoggedIn

//     this.greeting = function(){
//         console.log('hello');
        
//     }

//     return this
// }

// const userOne = new User("hitesh",12,true)
// const userTwo = new User("chai",12,true)
// console.log(userOne.constructor);
// console.log(userTwo);
