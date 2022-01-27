export const langButton = document.createElement('button');

let lang = 1;
const spanishStuff = Array.from(document.getElementsByClassName('spanish'));
const englishStuff = Array.from(document.getElementsByClassName('english'));
const language = [ 'Español', 'English' ];
langButton.id = 'lang-button';
langButton.innerHTML = language[lang];
langButton.onclick = function () {

  if (lang) {
    spanishStuff.map((i) => i.style.display = 'none');
    englishStuff.map((i) => i.style.display = 'flex');
    lang = 0;
  } else {
    spanishStuff.map((i) => i.style.display = 'flex');
    englishStuff.map((i) => i.style.display = 'none');
    lang = 1;
  }
  langButton.innerHTML = language[lang];
}
