import { loadCSV } from '/scripts/loadcsv.js';

export let lang = 1;
const langBtn = document.createElement('button');
const spanishStuff = Array.from(document.getElementsByClassName('spanish'));
const englishStuff = Array.from(document.getElementsByClassName('english'));
const language = [ 'Español', 'English' ];
langBtn.id = 'language';
langBtn.innerHTML = language[lang];
langBtn.onclick = () => {
  lang = (lang + 1) % 2;
  if (lang) {
    spanishStuff.map((i) => i.style.display = 'none');
    englishStuff.map((i) => i.style.display = 'flex');
  } else {
    spanishStuff.map((i) => i.style.display = 'flex');
    englishStuff.map((i) => i.style.display = 'none');
  }
  window.localStorage.setItem('lang', lang);
  langBtn.innerHTML = language[lang];
}

export function langButton() {
  document.getElementById('language').appendChild(langBtn);
  return langBtn;
}

export const langCode = [ 'es', 'en' ];

export function getLangCode() {
  const lang = window.localStorage.getItem('lang');
  return langCode[lang==null || lang==undefined ? 0 : lang];
}

export function loadLangFile(prefix, callback) { 
  const lang = getLangCode();
  loadCSV(`${prefix}-${lang}.txt`, callback);
}