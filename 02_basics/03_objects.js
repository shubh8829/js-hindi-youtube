// singleton

// object literals
const mySym = Symbol("key1")



const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}




JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@micrisoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
console.log(JsUser.greeting());