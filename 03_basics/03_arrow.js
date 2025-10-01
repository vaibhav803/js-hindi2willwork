const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// this refers current context


// user.welcomeMessage()

// user.username = "sam gangee"

// user.welcomeMessage()


console.log(this);

// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // doesnot work in function 
// }


// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this);
    
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 

const addTwo = (num1, num2) => (num1 + num2) 

console.log(addTwo(3,4))


//implict return

const myArray = [2,3,4,5]

myArray.forEach(() ())