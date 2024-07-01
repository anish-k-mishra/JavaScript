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


