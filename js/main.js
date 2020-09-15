var slideIndex = 1;
var slides = document.getElementsByClassName('my-slides');
var i;

function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex += n);
}



    // dot.innerHTMl = '<span class='dot' onclick='currentSlide(' + dotIndex +') '>' + dotIndex + '</span>';
    // document.getElementById('dotsHere').appendChild(dot);



function showSlides(n) {
  var dotsArr = document.getElementById('dotsHere').children;
  if(n < 1) {slideIndex = slides.length;}
  if(n > slides.length) {slideIndex = 1;}

  for(i=0; i < slides.length; i++){
      slides[i].style.display = 'none';
      dotsArr[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';
  dotsArr[slideIndex - 1].classList.add('active');
}

function makeDots(){
  for(i=0; i < slides.length; i++){
    var dotValue = slideIndex;
    var dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', function(){
      currentSlide(dotValue);
    });
		// dot.innerHTML =
		// 	'<span class="dot" onclick="currentSlide(' + slideIndex +')"></span>';

		document.getElementById('dotsHere').appendChild(dot);
    // var myDot = document.createElement('span');
    // myDot.className = 'dot';
    // // myDot.addEventListener('click', currentSlide(dotValue));
    // document.getElementById('dotsHere').appendChild(myDot);
  }
}

makeDots();
showSlides(slideIndex);



// TODO:  for loop based on slides.lenght in which you insert the html 'span' div
