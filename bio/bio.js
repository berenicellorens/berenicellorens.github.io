import { footerLinks } from '/scripts/footer.js';
import { bandcamp, soundcloud } from '/scripts/data.js';
// import { langButton, loadLangFile } from '/scripts/language.js';
import { loadFile } from '/scripts/langloader.js';


async function loader(response) {
  const section = document.querySelector('section');
  const article = document.createElement('article')
  if (section.lastChild) section.removeChild(section.lastChild);
  article.className = 'bio';
  const text = response.split('\n');
  // const header = document.createElement('h1');
  // header.innerHTML = text[0];
  // article.appendChild(header);
  text.slice(1).forEach( line => {
    const p = document.createElement('p');
    p.innerHTML = line;
    article.appendChild(p);
  });
  section.appendChild(article);
}

loadFile('bio', loader);

footerLinks([bandcamp, soundcloud, spotify], 'btn');
