/*
 * This function is called by the landing page on a script tag
 * It places multiple floating berenice marquee elements accross the screen
 * And then places a button to go to the home page
 * 
*/
import {mobile} from './mobile.js';

// Velocidad de las palabras
const scrolldelay = 2;
const scrollspeed = [5, 15];
const scrollwidth = [100, 300];
const beremarquee = [
  "berenicemusic",
  "deeplistening",
  "berenicellorens",
  "welcometomysound",
  "blablablablabla",
  "improvisation",
  "performance",
  "berenicellorens",
  "welcometomysound",
  "sound art",
  "berenicellorens",
  "atmospheres",
  "bereniceberenice",
  "experimentaltechno",
  "berenicellorens",
  "soundart",
  "llorensllorenslor",
  "w e l c o m e w e",
  "d j d j d j i c e",
  "b e r b e r b e r",
]

// boton BER EN ICE minimum height and width
const windowWidthMin = 200;
const windowHeightMin = 150;
const homeButtonTextArray = [ "BER", "EN", "ICE" ];


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
  const homeButtonWrapper = document.createElement('div');
  const homeButton = document.createElement('div');
  const [winHeight, winWidth] = [window.innerHeight, window.innerWidth];

  // Place the floating berenice marquee elements
  // 4 if we are on a mobile device, 17 otherwise
  for (let i = 0; i < (mobile ? 4 : 17); i++) {
    const h1 = document.createElement('h1');
    const b = document.createElement('marquee');
    b.setAttribute('scrolldelay', i * scrolldelay);
    b.setAttribute('scrollamount', rand(scrollspeed[0], scrollspeed[1]));
    b.style.width = rand(scrollwidth[0], scrollwidth[1]) + 'px';
    b.innerHTML = beremarquee[i % beremarquee.length];
    h1.appendChild(b);
    setRandTimeout(() => documentBody.appendChild(h1), timeToWaitForButton);
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
