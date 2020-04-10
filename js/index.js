// Your code goes here
const nav = document.querySelector(".nav-container");
nav.addEventListener("mouseenter", function(){
    
    nav.style.transform = "scale(1.6)";
    nav.style.transition = "transform 1s";
  })
  
  nav.addEventListener("mouseleave", function(){
    nav.style.transform = "scale(1.5)";
  })
  
const body = document.querySelector('body');

body.addEventListener('mouseenter', (event) => {
  body.style.backgroundColor = "coral";
  body.style.color = "white";
})
body.addEventListener('mouseleave', (event) => {
    body.style.backgroundColor = "white";
    body.style.color = "coral";
  })
const button1 = document.querySelector('#btn1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'orange';
});lack

const button2 = document.querySelector('#btn2');
button2.addEventListener('mouseover', function(event){
  event.target.style.background = 'black';
});

const button3 = document.querySelector('#btn3');
button3.addEventListener('dblclick', function(event){
  event.target.style.borderColor = 'red';
});
