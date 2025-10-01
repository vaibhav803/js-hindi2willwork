// function hello(){


//     console.log("hello");
    
// }


// hello()



function yes(){
    console.log("g");
    
    return "hello"
    
}

// const result = yes()
// console.log(result)



function loginUserMessage(username = "kino") {
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}


// const results = loginUserMessage("severus")

// console.log(loginUserMessage());


function CalculateCartPrice(va1,...num1) {
    return num1
}


// console.log(CalculateCartPrice(200,400,600));

const user = {
    username: "hitesh",
    price: 199
}

function calculate(user){
    console.log(user.user);
    
}


// calculate(user)
calculate({
    user: "hello",
})



const newarr = [200,400,5]

function getarray(array){
    console.log(array[2]);
    
}


getarray(newarr)


getarray([595,4,53])





