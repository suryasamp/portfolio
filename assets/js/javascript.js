

/* -------------------------------- NAV START ------------------------------- */

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav div div ul li a");

window.onscroll= () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>= offset && top < offset+height){
      navlinks.forEach(links=>{
         links.classList.remove('nav_active');
         document.querySelector('nav div div ul li a[href*='+ id +']').classList.add('nav_active'); 
      });
    };
  });
  
};
window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav").classList.add('sticky');
  } else {
    document.getElementById("nav").classList.remove('sticky');
  }
});
/* --------------------------------- NAV END -------------------------------- */

/* ----------------------------- CAROUSEL START ----------------------------- */
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  nav: true,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
/* ------------------------------ CAROUSEL END ------------------------------ */

/* ----------------------------- LIGHT BOX START ---------------------------- */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/* ------------------------------ LIGHT BOX END ----------------------------- */

/* ----------------------------------- AOS ---------------------------------- */
AOS.init();

