const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNums.filter( (num) => {
//     return num  > 4  // explicit return
// })


// console.log(newNums);

myArr = []

myNums.forEach( (val) => {
    if(val > 4){
        myArr.push(val)
    }
})


// console.log(myArr);




const obj1 = [
    {book:"1",genre:"ghost"

    },
    {
        book: "2", genre: "finite"
    },
    {
        book: "2", genre: "ghost"
    }
]


let books = obj1.filter( (num) => num.book === "1" )

books = obj1.filter( (bok) => {
    return (bok.genre === "finite" && bok.book === "2" )});


console.log(books);
