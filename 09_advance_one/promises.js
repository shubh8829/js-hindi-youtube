const promiseOne = new Promise(function(resolv, reject){
   //DB an async task
   //DB Calls, Cryptography, network
   setTimeout(function(){
     console.log('Async task is complete');
     resolv()
   }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolv, reject){
    setTimeout(function(){
       console.log("Async task 2"); 
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve({username: "Chai", email: "iamshubham.u@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Shubham", Password: "123"})
        }else{
            reject('ERROR: Somthing went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
   console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is resolved either rejected"))

const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", Password: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getallUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error);
//     }
// getallUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))