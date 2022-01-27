export let lang = 1;
const langBtn = document.createElement('button');
const spanishStuff = Array.from(document.getElementsByClassName('spanish'));
const englishStuff = Array.from(document.getElementsByClassName('english'));
const language = [ 'Español', 'English' ];
langBtn.id = 'lang-button';
langBtn.innerHTML = language[lang];
langBtn.onclick = function () {

  if (lang===1) {
    spanishStuff.map((i) => i.style.display = 'none');
    englishStuff.map((i) => i.style.display = 'flex');
    lang = 0;
  } else {
    spanishStuff.map((i) => i.style.display = 'flex');
    englishStuff.map((i) => i.style.display = 'none');
    lang = 1;
  }
  window.localStorage.setItem('lang', lang);
  langBtn.innerHTML = language[lang];
}

export function langButton() {
  document.querySelector('main').appendChild(langBtn);
}
