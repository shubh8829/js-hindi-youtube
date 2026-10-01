const name = "shubham"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
 

const gameName = new String('shubham-hc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  shubham   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20kumar"
console.log(url.replace('%20','_'))

console.log (url.includes('shubham'))


console.log(gameName.split('-'))