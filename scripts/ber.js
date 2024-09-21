/*
 * This function is called by the landing page on a script tag
 * It places multiple floating berenice marquee elements accross the screen
 * And then places a button to go to the home page
 * 
*/
import {mobile} from './mobile.js';

// Velocidad de las palabras
const scrolldelay = 4;
const scrollspeed = [5, 12];
const scrollwidth = [100, 300];
const beremarquee = [
  "what you are listening?",
  "experimental",
  "ser",
  "ecosystem",
  "atmospheres",
  "see",
  "ver",
  "im here",
  "observar",
  "post",
  "beyond of everithing",
  "how we are?",
  "words",
  "do you listen?",
  "artificial",
  "play",
  "time",
  "what the time is?",
  "are you feeling?",
  "broken paths",
  "noises",
  "experimental",
  "feel the air",
  "pulse",
  "broken",
  "dice",
]

// boton BER EN ICE minimum height and width
const windowWidthMin = 200;
const windowHeightMin = 150;
const homeButtonTextArray = [ "SPACE/TIME" ];


export function ber() {
  // This helper returns a random integer given a offset and a range
  function rand(offset, range) {
    return Math.floor((Math.random() * range) + offset);
  }

  // This helper fires up a `func`tion after a `time` in miliseconds
  async function setRandTimeout(func, time) {
    return setTimeout(func, rand(0, time));
  }

  const timeToWaitForButton = 2000; // in milliseconds
  const documentBody = document.querySelector('body');
  const divMainContent = document.getElementById('maincontent') ;
  const homeButtonWrapper = document.createElement('div');
  const homeButton = document.createElement('div');
  const [winHeight, winWidth] = [window.innerHeight, window.innerWidth];

  // Place the floating berenice marquee elements
  // 4 if we are on a mobile device, 17 otherwise
  
  for (let i = 0; i < (mobile ? 6 : 30); i++) {
    const h1 = document.createElement('h1');
    const b = document.createElement('marquee');
    const divMainContent = document.getElementById('maincontent') ;

     // Añadir posicionamiento dentro del viewport
  h1.style.position = 'absolute';
  h1.style.top = rand(0, window.innerHeight - 100) + 'px'; // Ajusta posición vertical
  h1.style.left = rand(0, window.innerWidth - 300) + 'px'; // Ajusta posición horizontal

    b.setAttribute('scrolldelay', i * scrolldelay);
    b.setAttribute('scrollamount', rand(scrollspeed[0], scrollspeed[1]));
    b.style.width = rand(scrollwidth[0], scrollwidth[1]) + 'px';
    b.innerHTML = beremarquee[i % beremarquee.length];
    h1.appendChild(b);
    setRandTimeout(() => divMainContent.appendChild(h1), timeToWaitForButton);
  }

  setTimeout(() => {
    // Prepare the floating berenice button
    homeButtonWrapper.setAttribute("id", "butdiv_centered");
    homeButtonWrapper.style.width = windowWidthMin + "px";
    homeButtonWrapper.style.height = windowHeightMin + "px";
    homeButtonWrapper.style.top = winHeight / 2 - (windowHeightMin / 2) + "px";
    homeButtonWrapper.style.left = winWidth / 2 - (windowWidthMin / 2) + "px";
    homeButton.setAttribute('class', 'but');
    homeButtonTextArray.forEach((textItem) => {
      const homeButtonClickable = document.createElement('div');
      const homeButtonText = document.createElement('span');
      homeButtonClickable.onclick = () => document.location.href = "home/";
      homeButtonText.innerHTML = textItem;
      homeButtonClickable.appendChild(homeButtonText);
      homeButton.appendChild(homeButtonClickable);
      homeButtonWrapper.appendChild(homeButton);
    });
    documentBody.appendChild(homeButtonWrapper);
  }, timeToWaitForButton);
}
