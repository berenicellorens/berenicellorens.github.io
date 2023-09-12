//import { youtube } from '/scripts/data.js';
import { loadCSV } from '/scripts/loadcsv.js';
//import { footerLinks } from '/scripts/footer.js';

async function loader(response) {
  const section = document.querySelector('main');
  const article = document.createElement('article')
  if (section.lastChild) section.removeChild(section.lastChild);
  article.className = 'bio';
  const text = response.split('\n');
  // const header = document.createElement('h1');
  // header.innerHTML = text[0];
  // article.appendChild(header);
  text.slice(1).forEach( (line, index) => {
    const data = line.split(',');
    if ( data[0] === undefined || data === undefined || data[0] === "" ) return;
    const container = document.createElement('div'); // container div
    const image = document.createElement('img'); // the image
    const link = document.createElement('a'); // the anchor on the title 
    const title = document.createElement('h4'); // the title
    const description = document.createElement('p'); // the description
    container.className = "container";
    // add the url attribute
    const image_source = `./rayaduras/${data[0]}`;
    image.setAttribute('src', image_source);
    // add the image description to the alt-text attribute
    const titulo = String(data[1] !== "" ? data[1] : data[0]).replace('.jpg', '').replace('.jpeg', '').replace('.png', '');
    image.setAttribute('alt', titulo);

    // add the title to the title tag
    link.setAttribute('href', image_source);
    link.setAttribute('title', titulo);
    link.setAttribute('target', '_blank');
    link.innerHTML = titulo;
    title.append(link);
    
    // wrap the image on the link as well
    link.appendChild(image);
      
    // add the description to the description tag
    description.innerHTML = data[2];

    // place the title, image and description tags inside the container
    container.appendChild(title)
    container.appendChild(link) // link now wraps the image so you can click it
    container.appendChild(description)
    article.appendChild(container);
  });
  section.appendChild(article);
}


loadCSV('rayaduras.csv', loader);

//footerLinks([youtube], 'btn');
