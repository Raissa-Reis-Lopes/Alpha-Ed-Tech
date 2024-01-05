    
//Light mode script

document.getElementById('toggle-light-mode').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('light-mode');
    var svgIcon = document.querySelector('.svg-icon');
    svgIcon.classList.toggle('light-mode');
});

//Script to auto typing
    var typed = new Typed(".typing", {
        strings: [
            'Renda Fixa', 'Renda Variável', 'CDB e LC', 'Tesouro Direto', 'LCI e LCA', 'Debêntures', 'CRI e CRA',  'Ações', 'Fundos Imobiliários', 'ETF', 'BDRs', 'Fundo de Investimento','COE', 'Previdência Privada'],
            typeSpeed: 200,
        backSpeed: 40,
        loop: true,
        cursorChar: '|',
    });

//Scipt to slide
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
var dots = document.getElementsByClassName("dot");
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
}


// Privacy Policy Modal Script

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}