const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} my repo count is ${repoCount}`);


const gameName = new String("Hello-object")


console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,5)
console.log(anotherString);


const newStringOne = "    hitesh       "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"


url

console.log(url.replace('%20',' '));


console.log(url.includes('hello'));


console.log(gameName.split('-'));







