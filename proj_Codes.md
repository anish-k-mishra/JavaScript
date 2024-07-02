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
