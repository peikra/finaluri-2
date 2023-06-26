//Change navigation style on scroll
window.addEventListener('scroll', event => { 
    event.preventDefault();
    let nav = document.querySelector('.header'); 
    
    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  event.preventDefault();
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

//Slider guest says
const slider = document.querySelector('.guests-says-slider');
const prevSlider = document.getElementById('prev');
const nextSLider = document.getElementById('next');

nextSLider.addEventListener('click', e => {
   e.preventDefault();
   slider.scrollBy(300, 0); 
});

prevSlider.addEventListener('click', e => {
   e.preventDefault();
   slider.scrollBy(-300, 0); 
});