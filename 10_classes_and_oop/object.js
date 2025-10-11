function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2



function createUser(username,score){
    this.username = username
    this.score =score
}


createUser.prototype.increment = function(){
    this.score++;
}


const chai = new createUser("chai",25)
const tea = new createUser("tea",25)

chai.increment()

console.log(chai.score)