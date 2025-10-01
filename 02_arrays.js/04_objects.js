//const tinder = new Object();

const tinderUser = {};


tinderUser.id = "12abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email : "samuron@g.com",
    fullname : {
        userfullname: {
            fullname: "jit",
        }
    }
}


console.log(regularUser.fullname.userfullname.fullname);



const obj1 = {1:"a",2: "b",3:"c"}
const obj2 = {4:"b",5:"h"}
const obj3 = {7:"b",6:"h"}


// const obj3 = {obj1, obj2}
// const value = Object.assign({},obj1,obj2,obj3)
// console.log();

const ob  = {...obj1,...obj2,...obj3}
// console.log(ob);

const users = [
    {
        id: 1,
        email: "h@pro.com",
    },
    {

    },
    {

    }
]


// console.log(users[0].id)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


course.courseInstructor

// object destructuring 

const {courseInstructor: instructor} = course


console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]






















