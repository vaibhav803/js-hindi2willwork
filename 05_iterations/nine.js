const num = [1,6,4,3,2]



const initalvalue = 0

const sumwithinital = num.reduce((acc,cv) =>acc+cv,initalvalue )

const mytotal = num.reduce(function(acc,currval){
    return acc + currval
},6)

// console.log(mytotal);

// console.log(sumwithinital);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,

    },
    {
        itemName: "python course",
        price: 2999,

    },
    {
        itemName: "mobile development course",
        price: 5999,

    },
    {
        itemName: 'data scientist course',
        price: 12999,

    },
    

]


const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price,0)

console.log(priceToPay);
