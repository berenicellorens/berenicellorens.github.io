import { lang } from './language.js';

const backButtonText = ['Volver', 'Back'];

export function backButton() {

  const backdiv = document.createElement('div');
  const backtext = document.createElement('div');
  backdiv.className = 'back';
  backdiv.onclick = () => history.back();
  backtext.appendChild(document.createTextNode(backButtonText[lang]));
  backdiv.appendChild(backtext)
  document.querySelector('body').appendChild(backdiv);

}
