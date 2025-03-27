// import { lang } from './language.js';

// const backButtonText = ['Volver', 'intro'];

// export function backButton() {

//   const backdiv = document.createElement('div');
//   const backtext = document.createElement('div');
//   backdiv.className = 'back';
  
//   backdiv.onclick = () => history.back();
 
//   backtext.appendChild(document.createTextNode(backButtonText[lang]));
//   backdiv.appendChild(backtext)
//   document.querySelector('body').appendChild(backdiv);

// }


import { lang } from './language.js';

const backButtonText = ['Inicio', 'Intro'];

export function backButton() {
  const backdiv = document.createElement('div');
  const backtext = document.createElement('div');
  backdiv.className = 'back';

  backdiv.onclick = () => window.location.href = '/'; // Redirige a la página de inicio
  
  backtext.appendChild(document.createTextNode(backButtonText[lang]));
  backdiv.appendChild(backtext);
  document.querySelector('body').appendChild(backdiv);
}
