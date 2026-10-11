# Projects related to DOM

## project link[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("shubham")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(Function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  });
});
```


## project 2 solution

```javascript
const form = document.querySelector('form')
// this usecase will give you empty
//const height = parseInt(dicument.querySelector('#height').value)
form.addEventListener('submit', function(e){
  e.preventDefault()

const height = parseInt(dicument.querySelector('#height').value)
const weight = parseInt(dicument.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNan(height)){
   result.innerHTML = `Please give a valid height &{height}`;
}else if(weight === '' || weight < 0 || isNan(weight)){
  result.innerHTML = `Please give a valid height &{weight}`;
} else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    result.innerHtml = `<span>${bmi}</span>`;
}
});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock')




setInterval(function(){
  let date = newDate()
 // console.log(date.toLocalTimeString());
  clock.innerHTML = date.toLocalTimeSring();
},1000)

```