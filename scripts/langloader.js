import { langButton, loadLangFile } from '/scripts/language.js';

export async function langLoader(response) {
  const section = document.querySelector('section');
  const article = document.createElement('article')
  if (section.lastChild) section.removeChild(section.lastChild);
  const text = response.split('\n');
  text.forEach( line => {
    const p = document.createElement('p');
    p.innerHTML = line;
    article.appendChild(p);
  });
  section.appendChild(article);
}

export function loadFile(prefix, loader) {
  const callback = loader ? loader : langLoader;
  const langBtn = langButton();
  langBtn.addEventListener('click', () => loadLangFile(prefix, callback));
  loadLangFile(prefix, callback);
}