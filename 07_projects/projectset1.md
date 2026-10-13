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
## project 3

```javascript
let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loeorHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParse');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1;

letplayGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  });

  }

function validateGuess(guess){
  if(isNaN(huess)){
    alert('please enter a valid number')
  }else if(guess < 1){
    alert('please enter a valid number')
  }else if(guess > 100){
    alert('please enter a valid number')
  }else{
    prevGuess(guess)
    if(numGuess ===11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endgame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }  
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is too low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is too high`)
  }  
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHtml = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.balue = ''
  userInput.setAttribute('sisabled', '')
  p.classList.add('button')
  p.innerHtml = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newgame')
  newGameButton.addEventListener('click', function(e){
  randomNumber = parseInt(Math.random() * 10 + 1)
  prevGuess = []
  numGuess =  1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled')
  startOver.removechild(p)
  playGame = true
  })
}


```

## project 5
 
```javascript
// generate a random color

const randomColor = function(){
  const hex = '0123456789abcdef'
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[math.floor(math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {

  setInterval(changeBgColor, 1000);
    if(!intervalId)
  intervalId = setInterval(changeBgColor, 1000);
  }
function changeBgColor(){
  document.body.style.backgroundColor = randomColor();
}
};
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener
('click', startChangingColor)

document.querySelector("#stop").addEventListener
('click', stopChangingColor)

```