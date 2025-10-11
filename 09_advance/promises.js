const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task
    //DB calls
    setTimeout(function(){
        console.log('Async completed')
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("async 2 complete")
        resolve()
    }
    
,1000)
}).then(function(){

    console.log("done")

})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:"chai"})
    },1000)    
});

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve("it is unerrored")
        }
        else{
            reject("it errored")
        }
    },1000)
})


promiseFour.then((user)=>{
    return user
}).then((user)=>{
    console.log(user);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("it is complete atlast");
    
})


const Promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",word:"nigam"})
        }
        else{
            reject("Error: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
    const response = await Promisefive
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
    
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((res)=>{
    console.log(res);
    
})
.catch((error)=>{
    console.log('error');
    
})
