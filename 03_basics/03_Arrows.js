const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.welcomeMessage = "sam"
// user.welcomeMessage()
// console.log(this);

// function Chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// Chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
   //const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))

const myArray = [1, 2, 3, 4, 5]
//myArray.forEach(() => ())