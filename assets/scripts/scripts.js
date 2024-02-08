let link = document.getElementById('link');
let burger = document.getElementById('burger');
let menu = document.querySelector('ul.menu');
let nav = document.querySelector('.navbar');
let lis = document.querySelectorAll('nav ul.menu li');




// burger menu to cross on click
// ##############################
link.addEventListener('click', function() {

  // if menu is openned
  if(burger.classList.contains('open')) {

      menu.style.display = "none";
      burger.classList.remove("open");
      menu.classList.remove('load');

  }
  // if menu is closed
  else {
      burger.classList.add('open');
      menu.classList.add('load');
      menu.style.display = "flex";
  }
});


// close menu on click on li
// ###########################
lis.forEach(li => {
  li.addEventListener('click', function() {
    menu.style.display = "none";
    menu.classList.remove('load');
    burger.classList.remove("open");
  })
})


// animation css - reveal elements
// ###############################
// define options
const ratio = .4
const options = {
  
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

// add class reveal-visible when ratio is good
const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {

    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  });
}

// loop foreach element who have reveal class css
  const observer = new IntersectionObserver(handleIntersect, options); 
  document.querySelectorAll('.reveal, .reveal-left, .reveal-bottom').forEach(function(r) {
    observer.observe(r)
  });

