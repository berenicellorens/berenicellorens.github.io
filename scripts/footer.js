import { links, home, iconsize } from './data.js';
import { append_to_div } from './elements.js';

export function footer() {
  
  const footer = document.querySelector('footer');
  const footDiv = document.createElement('div');
  const linksDiv = append_to_div(links, '_blank', iconsize);
  const navigationDiv = append_to_div(home);
  footDiv.id = 'footDiv';

  // let ht = append_to_div(hashtags, '_blank');
  // ht.id = 'hashtags';
  //footDiv.appendChild(ht);
  

  linksDiv.id = 'links';
  navigationDiv.id = 'home';

  footDiv.appendChild(linksDiv);
  footDiv.appendChild(navigationDiv);
  footer.appendChild(footDiv);

};


export function footerLinks(links, className) {
  let footdiv = append_to_div(links, "_blank", 0, className);
  footdiv.id = "footLink";
  document.querySelector('footer').appendChild(footdiv);
}

