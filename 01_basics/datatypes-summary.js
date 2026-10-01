// # Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, 
//   BigInt.
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3434343443434343434n

// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shakti", "nagraj", "doga"]
let myObj = {
    name:"hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello world")
}


console.log(typeof bigNumber);


// ===============================================

// stack(premitive), Heap(Non-premitive)

let myYoutubename = "shubh8829"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.email = "hitesh@google.com"

console.log(user.email);
console.log(userTwo.email);