import {hashtags, sepchar, links, iconsize, bRad, emails, home, music, make_back_image, sheet, electronica, marmotas, soberynice, arte} from './data.js';
import {langButton} from './language.js';
import { loadCSV } from './loadcsv.js';


export function add_key(object, key, value) {
  let obj = object;
  obj[key] = value;
  return obj;
};

export function img(src, width, titl, id, tURL) {
  let tag = document.createElement('img');
  let div = document.createElement('div');
  tag.setAttribute('src', src);
  let anc = anchor(src);
  if (width) {
    tag.setAttribute('width', width + bRad);
    div.style.width = width + "px";
  }
  if (titl) {
    tag.setAttribute('title', titl);
    tag.setAttribute('alt', titl);
  }
  if (id) tag.setAttribute('id', id);
  if (tURL) anc = anchor(tURL, '', "_blank");
  div.style.overflow = "hidden";
  div.style.borderRadius = bRad + "px";
  anc.appendChild(tag);
  div.appendChild(anc);
  return div;
}

export function anchor(link, text = '', target = "_top") {
  let tag = document.createElement('a');

  tag.setAttribute('href', link);
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target);
  tag.setAttribute('title', link);
  tag.className = 'subtitle';
  tag.appendChild(document.createTextNode(text));

  return tag;
};

export function append_to_div(array, tgt = "_top", icon = 0) {
  let a, sep, target = document.createElement('div');
  for (let i = 0; i < array.length; i++) {
    if (!icon) {
      sep = document.createElement('span');
      sep.innerHTML = sepchar;
      a = anchor(array[i]['url'], array[i]['title'], tgt);
    } else {
      a = img(array[i]['img'],
        icon,
        array[i]['title'],
        array[i]['title'],
        array[i]['url'])
    }
    target.appendChild(a);
    if (i < array.length - 1 && !icon)
      target.appendChild(sep);
  }
  return target;
};

export function footer(nav = false) {
  let footer = document.querySelector('footer');
  let foot = document.createElement('div');
  foot.setAttribute('id', 'foot');

  let ht = append_to_div(hashtags, "_blank");
  ht.setAttribute('id', "hashtags");

  let ln = append_to_div(links, "_blank", iconsize);
  ln.setAttribute('id', "links");
  let em = append_to_div(emails, "_blank");
  em.setAttribute('id', "emails");

  //foot.appendChild(ht);
  foot.appendChild(em);
  foot.appendChild(ln);

  if (!nav) {
    let hm = append_to_div(home);
    hm.setAttribute('id', "home");
    //foot.appendChild(hm);
  }

  footer.appendChild(foot);

};

// export function make_nav(header) {
//   let nav = document.createElement('nav');
//   let menu = document.createElement('ul');
//   let i, type = "none",
//     menuitem, menutitle, submenu;

//   for (i = 1; i < home.length; i++) {
//     let ntype = home[i]['type'];
//     if (type.localeCompare(ntype)) {
//       //is new menuitem
//       menuitem = document.createElement('li');
//       menutitle = document.createElement('span');
//       menuitem.className = 'menu-item';
//       menutitle.className = 'colored';
//       menutitle.innerHTML = ntype;
//       menuitem.appendChild(menutitle);
//       menu.appendChild(menuitem);
//       submenu = document.createElement('ul');
//     }
//     submenuitem = document.createElement('li');
//     submenuitem.appendChild(anchor(home[i]['url'], home[i]['title']));
//     submenu.appendChild(submenuitem);
//     menuitem.appendChild(submenu);
//     type = ntype;
//   }
//   // console.log(menu);
//   nav.appendChild(menu);
//   header.appendChild(nav);
// };

export function make_article(title, content) {
  let titlediv = document.createElement('h3');
  titlediv.appendChild(document.createTextNode(title));

  let article = document.createElement('article');
  article.appendChild(titlediv);

  for (let i = 0; i < content.length; i++) article.appendChild(content[i]);

  return article;
}



export function make_title(text, className='title') {
  const div = document.createElement('div');
  const h = document.createElement('h1');
  div.className = className;
  h.appendChild(document.createTextNode(text));
  div.appendChild(h);
  return div;
}

export function make_subtitle(title, url, text, type = 'h2', className = "subtitle") {
  let subtitle = document.createElement(type);
  subtitle.className = className;
  subtitle.appendChild(document.createTextNode(title));
  if (url) subtitle.appendChild(anchor(url ? url : "/", text ? text : title));
  return subtitle;
}

export function make_footlink(links) {
  let footdiv = append_to_div(links, "_blank");
  footdiv.id = "div";
  return footdiv;
}

export function load(main, sheet) {
  loadCSV(sheet, async function (response) {
    // var f, e, i, entry;
    // f = JSON.parse(response);
    let rows = response.split("\n");
    // console.log("Load", rows);
    rows.forEach((row, index) => {
      if (index > 0) {

        let cols = row.split(",");
        // console.log("Cols", index, cols);
        let title = cols[0];
        let iframe = cols[1].replaceAll("\"", "");
        let art = document.createElement('article');
        let div = document.createElement('div');
        let tit = document.createElement('h3');
        tit.innerHTML = title;
        div.className = 'iframeWrapper';
        art.appendChild(tit);
        art.appendChild(div);
        div.insertAdjacentHTML('beforeend', iframe);
        main.appendChild(art);
      }
    });

  });
}

export function makeBackButton(header) {

  let backdiv = document.createElement('div');
  backdiv.className = 'back';
  backdiv.onclick = () => history.back();

  // Element.prototype.setAttribute.apply(backdiv, on_click['home'])


  let backimg = document.createElement('img');
  let backtext = document.createElement('div');
  backtext.appendChild(document.createTextNode('home'));

  if (make_back_image) {
    // make back image
    backimg.setAttribute('src', back_img);
    backimg.setAttribute('width', back_img_width);
    backdiv.appendChild(backimg);
  } else {
    backdiv.appendChild(backtext)
  }
  header.appendChild(backdiv);

}

export function make(page) {
  let titlediv, dark = false;
  const main = document.querySelector('main');
  const foot = document.querySelector('footer');
  switch (page) {
    case "bio":
      // main.appendChild(langButton);
      foot.appendChild(make_footlink(music));
      break;
    case "marmotas":
      main.appendChild(langButton);
      foot.appendChild(make_footlink(marmotas));
      load(main, sheet["marmotas"]);
      break;
    case "sobery":
      main.appendChild(langButton);
      foot.appendChild(make_footlink(soberynice));
      load(main, sheet["sobery"]);
      dark = true;
      break;
    case "arte": //Videoarte --> titulo borrado
      foot.appendChild(make_footlink(arte));
      load(main, sheet["video"]);
      dark = true;
      break;
    case "albums":
      titlediv = make_title("Discos");
      foot.appendChild(make_footlink(music));
      dark = true;
      load(main, sheet["albums"]);
      break;
    case "electronica":
      titlediv = make_title("Electrónica");
      foot.appendChild(make_footlink(electronica));
      load(main, sheet["dj"]);
      break;
    case "home": //berenicellorens --> titulo borrado
    default:
      break;
  }
  // append to page
  let header = document.querySelector('header');
  if (titlediv) header.appendChild(titlediv);
  footer(dark);
}

export {langButton};
