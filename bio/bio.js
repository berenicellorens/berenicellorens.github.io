import { footerLinks } from '/scripts/footer.js';
import { bandcamp, soundcloud, spotify } from '/scripts/data.js';
// import { langButton, loadLangFile } from '/scripts/language.js';
import { loadFile } from '/scripts/langloader.js';


async function loader(response) {
  const bioText = document.querySelector('.bio-text');  // <-- aquí se escribe
  bioText.innerHTML = "";

  const text = response.split('\n');
  text.slice(1).forEach(line => {
    const p = document.createElement('p');
    p.innerHTML = line;
    bioText.appendChild(p);
  });
}



loadFile('bio', loader);

footerLinks([bandcamp, soundcloud, spotify], 'btn');
