///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


const beretags = [
    "berenicemusic",
    "blabladuriasdeberenice",
    "rayaduras_berenice",
    "berydual",
    "movienicemusic",
];

const keywords = [
    "berenicellorens",
    "dj",
    "composer",
    "artist",
    "electronics",
    "live-video",
    "instrumental",
];

// Velocidad de las palabras
const scrolldelay = 2;
const scrollspeed = [5, 10];
const scrollwidth = [100, 300];

const beremarquee = [
    "berenicemusic",
    "berenicemusic",
    "berenicellorens",
    "welcometomysound",
    "blablablablabla",
    "blablablablabla",
    "berenicemusic",
    "movieniceberenice",
    "welcometomysound",
    "welcometomyworld",
    "welcometomyworld",
    "blablablablabla",
    "bereniceberenice",
    "erenicellorensber",
    "welcometomyworld",
    "icellorensicellor",
    "llorensllorenslor",
    "e n e n e n e n e",
    "i c e i c e i c e",
    "b e r b e r b e r",
]

// boton BER EN ICE minimum height and width
const minW = 200;
const minH = 150;
const butenice = [
    "BER",
    "EN",
    "ICE"
];


var fullname = "Berenice Llorens";
var idioma = "es-AR";
var bere = "berenicellorens";
var url_insta = "https://www.instagram.com";
var url_spotify = "https://open.spotify.com/artist/1wkoEOAEYnEflO8as4GCPG?si=3NvtjUmPSIyR4BTm6Mt3fA";
var url_mixcloud = "https://www.mixcloud.com/Berenicecream";
var url_sound = "https://www.soundcloud.com";
var url_mix = "https://www.mixcloud.com";
var url_yout = "https://www.youtube.com"
var berechan = "UCop84-W9fYAEaZfICstuvMA"
var root = bere + ".github.io";
var url_root = "https://" + root;
var sepchar = "&nbsp;&middot;&nbsp;";
var raw = "https://raw.githubusercontent.com";
var url_img = raw + "/" + bere + "/" + root + "/master/img";
var url_ico = url_img + "/logo.ico";
var url_jpg = url_img + "/logo.jpg";
var insta_png = url_img + "/instagram.png";
var spotify_png = url_img + "/spotify.png";
var bandcamp_png = url_img + "/bandcamp.png";
var soundcloud_png = url_img + "/soundcloud.png";
var mixcloud_png = url_img + "/mixcloud.png";
var back_img = url_img + "/back.gif";
var url_cv_logo = raw + "/" + bere + "/cv/master/bere-logo.jpeg";
var url_bandcamp = "https://" + bere + ".bandcamp.com";
var bio = "Berenice Llorens es artista, compositora y DJ cordobesa. Su carrera comienza en el 2007 participando como tecladista, bajista y guitarrista en bandas de reggae, afrobeat, rock alternativo y pop. Desde el inicio y, con búsqueda y estilo propio, desarrolla un repertorio solista de obras y canciones experimentales que, en el 2017, comienzan a tener una fuerte influencia de procesos y música electrónica, año que marca el inicio de su carrera como DJ y productora. Su trabajo está disponible en: " + url_root;

var back_img_width = 50;

var viewport_settings = [
    "width=device-width",
    "minimum-scale=1.0",
    "maximum-scale=1.0",
    "user-scalable=no",
];

var iconsize = 35;
var bRad = 0;
var make_back_image = false;
var h, hashtags = [];


var links = [{
        "title": "@" + bere,
        "url": url_insta + "/" + bere,
        "img": insta_png
    },
    {
        "title": "spotify/berenicellorens",
        "url": url_spotify,
        "img": spotify_png
    },
    {
        "title": "bandcamp",
        "url": url_bandcamp,
        "img": bandcamp_png
    },
    {
        "title": "mixcloud",
        "url": url_mixcloud,
        "img": mixcloud_png
    },
    {
        "title": "soundcloud",
        "url": url_sound + "/" + bere,
        "img": soundcloud_png
    }
];

var emails = [{
    "title": bere + "@gmail.com",
    "url": "mailto:" + bere + "@gmail.com"
}];

var home = [{
        "title": "Home",
        "url": url_root + "/home",
    },
    {
        "type": "bio",
        "title": "Sobre mí",
        "url": url_root + "/bio",
    },
    {
        "type": "bio",
        "title": "Cv",
        "url": url_root + "/cv",
    },
    {
        "type": "solo",
        "title": "Discografía",
        "url": url_root + "/solo/albums.html",
    },
    {
        "type": "solo",
        "title": "Dj Sets",
        "url": url_root + "/solo/dj.html",
    },
    // add_key(hashtags[0],"type","solo"),
    {
        "type": "duo",
        "title": "Marmotas Dreams",
        "url": url_root + "/duo/marmotas.html",
    },
    {
        "type": "duo",
        "title": "SoBeryNice",
        "url": url_root + "/duo/sobery.html",
    },
    {
        "type": "arte",
        "title": "Videoarte",
        "url": url_root + "/arte/video.html",
    },
    {
        "type": "arte",
        "title": "Rayaduras",
        "url": url_insta + "/rayaduras",
    },
    {
        "type": "arte",
        "title": "La Cursividad",
        "url": "https://" + bere + ".blogspot.com",
    }
];

var music = [{
        "type": "solo",
        "title": "Bandcamp",
        "url": url_bandcamp
    },
    {
        "type": "solo",
        "title": "Soundcloud",
        "url": url_sound + "/" + bere
    }
];

var soberynice = [{
        "type": "duo",
        "title": "@soberynice",
        "url": url_insta + "/soberynice"
    },
    {
        "type": "duo",
        "title": "Mixcloud",
        "url": url_mix + "/SoBeryNice"
    }
];

var marmotas = [{
    "type": "duo",
    "title": "@marmotasdreams",
    "url": url_insta + "/marmotasdreams"
}];

var arte = [{
    "type": "arte",
    "title": "Youtube",
    "url": url_yout + "/channel/" + berechan
}];

var electronica = [{
    "type": "solo",
    "title": "Berenicecream",
    "url": url_mix + "/berenicecream"
}];

var on_click = {
    "home": ["onclick", "window.open(\'" + home[0]['url'] + "\','_top')"]
}

var mobile = mobileCheck();
var gs_url = "https://spreadsheets.google.com/feeds/list";
var gs_id = "1j3mYdWxe5l7S_VheFBwl3g8IjUc7DyfKHKIHeOetMg8";
var gs_type = "public/values?alt=json";

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

for (h in beretags) {
    hashtags.push({
        "title": "#" + beretags[h],
        "url": url_insta + "/explore/tags/" + beretags[h]
    });
};

var sheet = [];
for (let i = 1; i < 7; i++) sheet[i] = gs_url + "/" + gs_id + "/" + i.toString() + "/" + gs_type;




function add_key(object, key, value) {
    let obj = object;
    obj[key] = value;
    return obj;
};

function img(src, width, titl, id, tURL) {
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

function anchor(link, text = '', target = "_top") {
    let tag = document.createElement('a');

    tag.setAttribute('href', link);
    tag.setAttribute('rel', 'nofollow');
    tag.setAttribute('target', target);
    tag.setAttribute('title', link);
    tag.className = 'subtitle';
    tag.appendChild(document.createTextNode(text));

    return tag;
};

function append_to_div(array, tgt = "_top", icon = 0) {
    let a, sep, target = document.createElement('div');
    for (i = 0; i < array.length; i++) {
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

function footer(nav = false) {
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

function make_nav() {
    let header = document.querySelector('header');
    let nav = document.createElement('nav');
    let menu = document.createElement('ul');
    let i, type = "none",
        menuitem, menutitle, submenu;

    for (i = 1; i < home.length; i++) {
        let ntype = home[i]['type'];
        if (type.localeCompare(ntype)) {
            //is new menuitem
            menuitem = document.createElement('li');
            menutitle = document.createElement('span');
            menuitem.className = 'menu-item';
            menutitle.className = 'colored';
            menutitle.innerHTML = ntype;
            menuitem.appendChild(menutitle);
            menu.appendChild(menuitem);
            submenu = document.createElement('ul');
        }
        submenuitem = document.createElement('li');
        submenuitem.appendChild(anchor(home[i]['url'], home[i]['title']));
        submenu.appendChild(submenuitem);
        menuitem.appendChild(submenu);
        type = ntype;
    }
    // console.log(menu);
    nav.appendChild(menu);
    header.appendChild(nav);
};

function make_article(title, content) {
    let titlediv = document.createElement('h3');
    titlediv.appendChild(document.createTextNode(title));

    let article = document.createElement('article');
    article.appendChild(titlediv);

    for (let i = 0; i < content.length; i++) article.appendChild(content[i]);

    return article;
}
let lang = 1;
let langButton = document.createElement('button');
langButton.id = 'lang-button';
langButton.innerHTML = 'Español';
let spanishStuff = Array.from(document.getElementsByClassName('spanish'));
let englishStuff = Array.from(document.getElementsByClassName('english'));
langButton.onclick = function () {
    console.log(spanishStuff);
    
    if (lang == 1) {
        spanishStuff.map((i) => i.style.display = 'none');
        englishStuff.map((i) => i.style.display = 'flex');
        langButton.innerHTML = 'English';
        lang = 0;
        
    } else {
        spanishStuff.map((i) => i.style.display = 'flex');
        englishStuff.map((i) => i.style.display = 'none');
        langButton.innerHTML = 'Español';
        lang = 1;
        
    }
    
    console.log(lang);
}

// var bioData=[];

// function make_bio() {

// 	let bioimgdiv = document.createElement('div');
// 	let biotxtdiv = document.createElement('div');
// 	let bioimg = document.createElement('img');
// 	let biotxt = document.createElement('p');

// 	//bio
// 	if(bioData.length==0)
// 	{
// 		loadJSON(sheet[6], async function(response) {
// 			var f, e, i, entry;
// 			f = JSON.parse(response);
// 			entry = f.feed.entry;
// 			for (i in entry) {
// 			  e = entry[i];
// 			  bioData[0] = e.gsx$title.$t;
// 			  bioData[1] = e.gsx$text.$t;
// 			  bioData[2] = e.gsx$image.$t;
// 			}

// 			bioimg.setAttribute('class','image-container');
// 			biotxt.appendChild(document.createTextNode(bioData[1]));
// 			bioimgdiv.appendChild(bioimg);
// 			biotxtdiv.appendChild(biotxt);
// 			bioimg.setAttribute('src', bioData[2].replace('file/d/','uc?id=').replace('/view',''));

// 		});
// 	}
// 	// console.log(bioData);
// 	biotext=bioData[0]?bioData[0]:"Bio";
// 	return [ make_article(biotext, [bioimgdiv, biotxtdiv]) ];
// }

function make_title(titletext, titleclass = 'title') {
    let titlediv = document.createElement('div');

    titlediv.setAttribute('class', titleclass);

    let title = document.createElement('h1');

    title.appendChild(document.createTextNode(titletext));

    titlediv.appendChild(title);

    return titlediv;
}

function make_subtitle(title, url, text, type = 'h2', titleclass = "subtitle") {
    let subtitle = document.createElement(type);
    subtitle.setAttribute("class", titleclass);
    subtitle.appendChild(document.createTextNode(title));
    if (url) subtitle.appendChild(anchor(url ? url : "/", text ? text : title));
    return subtitle;
}

function make_footlink(links) {
    let footdiv = append_to_div(links, "_blank");
    footdiv.setAttribute('id', "div");

    return footdiv;
}

function load(main, sheet) {
    loadJSON(sheet, async function (response) {
        var f, e, i, entry;
        f = JSON.parse(response);
        entry = f.feed.entry;
        for (i in entry) {
            e = entry[i];
            var title = e.gsx$title.$t;
            var iframe = e.gsx$iframe.$t;
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
}

function make(page, footnav = false) {
    let titlediv, subtitlediv, subsubtitlediv, articles = [],
        footlink = [];
    let main = document.querySelector('main');
    let foot = document.querySelector('footer');
    let dark = false;
    let backbutton = true;
    switch (page) {
        case "bio":
            titlediv = make_title("Sobre mí", titleclass = 'maintitle');
            main.appendChild(langButton);
            foot.appendChild(make_footlink(music));
            // articles = make_bio("Bio");
            // load(main, sheet[6]);
            break;
        case "marmotas":
            // titlediv = make_title("Marmotas Dreams");
            // subtitlediv = make_subtitle("duo con ",
            // url_insta+"/constanzapellici",
            // "Constanza Pellici");
            main.appendChild(langButton);
            foot.appendChild(make_footlink(marmotas));
            load(main, sheet[5]);
            break;
            case "sobery":
                // titlediv = make_title("SoBeryNice");
                // subtitlediv = make_subtitle("duo con ",
                // url_insta+"/sopiuzzi",
            // "So Piuzzi");
            main.appendChild(langButton);
            foot.appendChild(make_footlink(soberynice));
            load(main, sheet[4]);
            dark = true;
            break;
        case "arte": //Videoarte --> titulo borrado
            titlediv = make_title("", titleclass = 'maintitle');
            foot.appendChild(make_footlink(arte));
            load(main, sheet[3]);
            dark = true;
            break;
        case "albums":
            titlediv = make_title("Discos");
            foot.appendChild(make_footlink(music));
            dark = true;
            load(main, sheet[1]);
            break;
        case "electronica":
            titlediv = make_title("Electrónica");
            foot.appendChild(make_footlink(electronica));
            load(main, sheet[2]);
            break;
        case "home": //berenicellorens --> titulo borrado
            backbutton = false;
            titlediv = make_title("", titleclass = 'maintitle');
            swrap = document.createElement('div')
            swrap.setAttribute('class', 'swrap-container')
            title1 = make_subtitle("experimental sound",
                false,
                '',
                'span',
                titleclass = 'swrap-title');

            title2 = make_subtitle("dj - productora",
                false,
                '',
                'span',
                titleclass = 'swrap-title');
            swrap.appendChild(title1);
            swrap.appendChild(title2);
            subtitlediv = swrap;
            footnav = true;
            break;
        default:
            break;
    }
    // append to page
    let header = document.querySelector('header');
    if (titlediv) header.appendChild(titlediv);

    if (subtitlediv) header.appendChild(subtitlediv);
    if (subsubtitlediv) header.appendChild(subsubtitlediv);

    for (let i = 0; i < articles.length; i++) main.appendChild(articles[i]);

    if (footnav) make_nav();

    footer(footnav, dark);

    if (backbutton) {

        let backdiv = document.createElement('div');
        backdiv.className = 'back';

        Element.prototype.setAttribute.apply(backdiv, on_click['home'])


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

}




function ber() {
    let body = document.querySelector('body');
    let butdiv = document.createElement('div');
    let w = window.innerWidth;
    let h = window.innerHeight;
    let i, s;
    if (mobile) {
        s = 4;
    } else {
        s = 17;
    }

    for (i = 0; i < s; i++) {
        let bermarquee = document.createElement('marquee');
        bermarquee.setAttribute('scrolldelay', i * scrolldelay);
        bermarquee.setAttribute('scrollamount', Math.floor(Math.random() * scrollspeed[1] + scrollspeed[0]));
        bermarquee.setAttribute('style', 'width:' + Math.floor(Math.random() * scrollwidth[1] + scrollwidth[0]) + "px")
        bermarquee.innerHTML = beremarquee[i % beremarquee.length];
        let h1 = document.createElement('h1');
        h1.appendChild(bermarquee);

        (function (i) {
            setTimeout(function () {
                // console.log(i);
                body.appendChild(h1);
            }, Math.floor(Math.random() * 1500));
        })(i);
    }
    butdiv.setAttribute("id", "butdiv_centered");
    let midW = w / 2;
    let midH = h / 2;
    butdiv.style.width = minW + "px";
    butdiv.style.height = minH + "px";
    butdiv.style.top = midH - (minH / 2) + "px";
    butdiv.style.left = midW - (minW / 2) + "px";

    setTimeout(function () {
        let but = document.createElement('div');
        but.setAttribute('class', 'but');
        for (x in butenice) {
            (function (x) {
                setTimeout(function () {
                    let div = document.createElement('div');
                    div.setAttribute('onclick', "window.open(\'" + home[0]['url'] + "\','_top')");
                    let span = document.createElement('span');
                    span.innerHTML = butenice[x];
                    div.appendChild(span);
                    but.appendChild(div);
                    butdiv.appendChild(but);
                }, 450);
            })(x);
        };
        body.appendChild(butdiv);
    }, 2000);
}

function mobileCheck() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}


function loadJSON(x, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', x, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}