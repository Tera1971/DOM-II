// Your code goes here


const nav = document.querySelector(".nav-container");
    nav.addEventListener("mouseenter", function(event){
    nav.style.transform = "scale(1.5)";
    nav.style.transition = "transform 1s";
    event.stopPropagation();
     
  })
  nav.addEventListener("mouseleave", function(event){
    nav.style.transform = "scale(1.0)";
  })

  const navStop = document.querySelector('nav');
  navStop.addEventListener('click', function(event){
  event.preventDefault();
  alert(`LET'S GOOOO!`);
})
const home = document.querySelector('.intro');
  home.addEventListener('click', function(event){
   home.style.backgroundColor = 'red';
  home.style.color = 'white';
 })

  const letsGo= document.querySelector('.text-content');
  letsGo.addEventListener('click', function(event){
    letsGo.style.color = "green";
  })

  const destinations = document.querySelector('.content-section');
  destinations.addEventListener('mouseenter', function(event) {
    destinations.style.backgroundColor = "yellow";
    destinations.style.color = "black";
  })

  const adventure = document.querySelector('.content-destination');
  adventure.addEventListener('click', function(event) {
    adventure.style.backgroundColor = "blue";
    adventure.style.color = "white";
  })

const footer = document.querySelector('footer');
 footer.addEventListener('mouseenter', function(event){
  footer.style.backgroundColor = "red";
  footer.style.color = "black";
})
 footer.addEventListener('mouseleave', function(event){
    footer.style.backgroundColor = "purple";
    footer.style.color = "red";
  })


