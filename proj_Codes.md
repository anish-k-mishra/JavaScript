# Basic DOM Projects
## Project Link:
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-te41js?file=index.html)

## JS code : Colour Switcher
```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(butt){
  console.log(butt);
  butt.addEventListener('click', function(e){
    console.log(e.target); //this gives us from where the event is generated
    if(e.target.id === 'bisque'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'bhagwa'){
      body.style.backgroundColor = 'rgb(255, 136, 0)';
    }
    else if(e.target.id === 'brown'){
      body.style.backgroundColor = 'rgb(207, 100, 100)';
    }
    else if(e.target.id === 'sky'){
      body.style.backgroundColor = 'rgb(141, 232, 255)';
    }
  })
})
```

## JS code : BMI Calculator
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if(h === '' || h < 0 || isNaN(h)){
    result.innerHTML = "Please enter a valid height!";
  }
  else if(w === '' || w<0 || isNaN(w)){
    result.innerHTML = "Please enter a valid weight!";
  }
  else{
    const bmi = (w/((h*h)/10000)).toFixed(2);
    console.log(bmi)
    //show the result
    result.innerHTML = `<span><h3>${bmi}</h3></span><br>`;
    let div;
    if(bmi < 18.6){
      div = document.createElement('div');
      let text = document.createTextNode('Oh no! You are underweight!');
      div.appendChild(text);
      result.appendChild(div);
    }
    else if(bmi >= 18.6 && bmi<= 24.9){
      
      div = document.createElement('div');
      let text = document.createTextNode('Good! You are perfect!');
      div.appendChild(text);
      result.appendChild(div);
      
    }
    else{
      
      div = document.createElement('div');
      let text = document.createTextNode('Oh my God! You are overweight!');
      div.appendChild(text);
      result.appendChild(div);
      
    }
  }
})
```
## JS code : Digital Clock
```javascript
const clock = document.querySelector('#clock');
setInterval(function(){//this function takes a callback function and a fixed time(in ms) after which the callback function is called in reccurring way till the document is open.  
let date = new Date();
clock.innerHTML = `${date.toLocaleTimeString()}`
  
}, 1000)
```
## JS Code : Guess the number
```javascript
let random = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(input.value);
    
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number!');
  }
  else if(guess<1){
    alert('Please enter a number between 1 and 100');
  }
  else if(guess>100){
    alert('Please enter a number between 1 and 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess > 10){
      displayGuess(guess);
      displayMessage(`Game Over! The correct number was ${random}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === random){
    displayMessage(`Congrats! You guessed it right!`);
    endGame();
  }
  else if(guess < random){
    displayMessage(`No! The guess is too low..!`);
  }
  else if(guess>random){
    displayMessage(`No! The guess is too high..!`);
  }
}

function displayGuess(guess){
  input.value = '';
  guesses.innerHTML += `${guess}  `;
  numGuess++;
  if(11-numGuess >=0){
    remaining.innerHTML = `${11 - numGuess}`
  }
  else{
    remaining.innerHTML = `${0}`;
  }
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h3>${message}</h3>`;

}

function endGame(){
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id = "newGame" style = "border:2px solid green; cursor:pointer; border-radius: 2px; padding: 2px ; background-color: grey">Start new game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame(){
  const newg = document.querySelector('#newGame');
  newg.addEventListener('click', function(e){
    random = parseInt(Math.random()*100 +1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}
```
## JS Code : Keyboard
```javascript
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {

  insert.innerHTML = `
    <div class = "color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `
})

```
## JS Code : Unlimited Colors
```javascript
//generate a random colour
const randomColor = function(){
  const hex = "012345678910ABCDEF";
  let color = "#";
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}


let start;
function changeColor(){
  function changeBGC(){
    document.querySelector('body').style.backgroundColor = randomColor();
  }
  if(start == null){
    start = setInterval(changeBGC, 1000);
  }
}

let noChangeColor = function(){
  clearInterval(start);
  start = null;
}

document.querySelector('#start').addEventListener('click', changeColor);
document.querySelector('#stop').addEventListener('click', noChangeColor);
```