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


// const btn = document.querySelectorAll('.btn')
//   btn.addEventListener('click', function(event){
//    btn.style.backgroundColor = 'red';
//    btn.style.color = "black";
//  });


const footer = document.querySelector('footer');
 footer.addEventListener('mouseenter', function(event){
  footer.style.backgroundColor = "red";
  footer.style.color = "black";
})
 footer.addEventListener('mouseleave', function(event){
    footer.style.backgroundColor = "purple";
    footer.style.color = "red";
  })


