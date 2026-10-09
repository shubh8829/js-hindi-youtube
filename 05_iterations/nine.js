const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
{    
    itemName: "Data analytics",
    price: 399
},
{
    itemName: "CPP",
    price: 299
},
{
    itemName: "Data science",
    price: 799
},
{
    itemName: "PY",
    price: 899
}
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);