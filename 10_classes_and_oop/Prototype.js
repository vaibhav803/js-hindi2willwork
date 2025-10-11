let myName = "hitesh    "

console.log(myName.truelength);


let myHeroes = ["thor","scott galloway"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}


Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

// heroPower.hitesh()

// myHeroes.hitesh()

Array.prototype.heyHitesh = function(){
    console.log("hey its path")
}

// myHeroes.hitesh()
// myHeroes.heyHitesh()
// heroPower.heyHitesh()


// inheritance


// const Teacher = {
//     makeVideo: true
// }


// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'js assignment',
//     fulltime: true,
//     __proto__: TeachingSupport
// }


// Teacher.__proto__ = TASupport


// modern support


// Object.setPrototypeOf(TeachingSupport,Teacher)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    

    
}

// myName.truelength()
"hitesh".trueLength()
"iceTea".trueLength()