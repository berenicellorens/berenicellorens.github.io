import { backButton } from '/scripts/backbutton.js'

const velocidad = 75;

backButton();

// google analytics stuff
window.dataLayer = window.dataLayer || [];
export function gtag() { dataLayer.push(arguments) };
gtag('js', new Date());
gtag('config', 'UA-173546930-1');

var btn = document.getElementsByClassName('colorify');

for (var i = 0; i < btn.length; i++) {

  let myinterval = null;
  const b = btn[i];
  
  b.addEventListener('mouseover', function () {
    // make the background change when mouse is over btn
    myinterval = setInterval(function () {
      colorify(b);
    }, velocidad);
  });

  // make the background change when mouse is out of btn
  b.addEventListener('mouseout', function() {
    clearInterval(myinterval);
    b.style.backgroundColor = "rgb(251, 255, 0)"
  } );
  
  b.addEventListener('click', function() {
    clearInterval(myinterval);
  });

}

function colorify(e) {
  let r = Math.trunc(Math.random() * 255);
  let g = Math.trunc(Math.random() * 100);
  let b = Math.trunc(Math.random() * 255);
  e.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}