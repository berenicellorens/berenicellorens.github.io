
export const beretags = [
  "berenicemusic",
  "blabladuriasdeberenice",
  "rayaduras_berenice",
  "berydual",
  "movienicemusic",
];

export const keywords = [
  "berenicellorens",
  "dj",
  "composer",
  "artist",
  "electronics",
  "live-video",
  "instrumental",
];

// Velocidad de las palabras
export const scrolldelay = 2;
export const scrollspeed = [5, 15];
export const scrollwidth = [100, 300];

export const beremarquee = [
  "berenicemusic",
  "berenicemusic",
  "berenicellorens",
  "welcometomysound",
  "blablablablabla",
  "blablablablabla",
  "berenicemusic",
  "berenicellorens",
  "welcometomysound",
  "berenicellorens",
  "berenicellorens",
  "blablablablabla",
  "bereniceberenice",
  "erenicellorensber",
  "berenicellorens",
  "icellorensicellor",
  "llorensllorenslor",
  "e n e n e n e n e",
  "i c e i c e i c e",
  "b e r b e r b e r",
]

// boton BER EN ICE minimum height and width
export const windowWidthMin = 200;
export const windowHeightMin = 150;
export const homeButtonTextArray = [
  "BER",
  "EN",
  "ICE"
];


export const fullname = "Berenice Llorens";
export const idioma = "es-AR";
export const bere = "berenicellorens";
export const url_insta = "https://www.instagram.com";
export const url_spotify = "https://open.spotify.com/artist/1wkoEOAEYnEflO8as4GCPG?si=3NvtjUmPSIyR4BTm6Mt3fA";
export const url_mixcloud = "https://www.mixcloud.com/Berenicecream";
export const url_sound = "https://www.soundcloud.com";
export const url_mix = "https://www.mixcloud.com";
export const url_yout = "https://www.youtube.com"
export const berechan = "UCop84-W9fYAEaZfICstuvMA"
export const root = bere + ".github.io";
export const url_root = "https://" + root;
export const sepchar = "&nbsp;&middot;&nbsp;";
export const raw = "https://raw.githubusercontent.com";
export const url_img = raw + "/" + bere + "/" + root + "/master/img";
export const url_ico = url_img + "/logo.ico";
export const url_jpg = url_img + "/logo.jpg";
export const insta_png = url_img + "/instagram.png";
export const spotify_png = url_img + "/spotify.png";
export const bandcamp_png = url_img + "/bandcamp.png";
export const soundcloud_png = url_img + "/soundcloud.png";
export const mixcloud_png = url_img + "/mixcloud.png";
export const back_img = url_img + "/back.gif";
export const url_cv_logo = raw + "/" + bere + "/cv/master/bere-logo.jpeg";
export const url_bandcamp = "https://" + bere + ".bandcamp.com";
export const bio = "Berenice Llorens es artista, compositora y DJ cordobesa. Su carrera comienza en el 2007 participando como tecladista, bajista y guitarrista en bandas de reggae, afrobeat, rock alternativo y pop. Desde el inicio y, con búsqueda y estilo propio, desarrolla un repertorio solista de obras y canciones experimentales que, en el 2017, comienzan a tener una fuerte influencia de procesos y música electrónica, año que marca el inicio de su carrera como DJ y productora. Su trabajo está disponible en: " + url_root;

export const back_img_width = 50;

export const viewport_settings = [
  "width=device-width",
  "minimum-scale=1.0",
  "maximum-scale=1.0",
  "user-scalable=no",
];

export const iconsize = 35;
export const bRad = 0;
export let make_back_image = false;
export const hashtags = beretags.map((tag)=> { 
  return { 
    "title": "#" + tag,
    "url": url_insta + "/explore/tags/" + tag 
  }
});

export const links = [{
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

export const emails = [{
  "title": bere + "@gmail.com",
  "url": "mailto:" + bere + "@gmail.com"
}];

export const home = [{
  "title": "Home",
  "url": "/home/",
},
{
  "type": "bio",
  "title": "Sobre mí",
  "url": "/bio/",
},
{
  "type": "bio",
  "title": "Cv",
  "url": "/cv",
},
{
  "type": "solo",
  "title": "Discografía",
  "url": "/solo/albums.html",
},
{
  "type": "solo",
  "title": "Dj Sets",
  "url": "/solo/dj.html",
},
// add_key(hashtags[0],"type","solo"),
{
  "type": "duo",
  "title": "Marmotas Dreams",
  "url": "/duo/marmotas.html",
},
{
  "type": "duo",
  "title": "SoBeryNice",
  "url": "/duo/sobery.html",
},
{
  "type": "duo",
  "title": "toros",
  "url": "https://fdch.github.io/toros",
},
{
  "type": "arte",
  "title": "Videoarte",
  "url": "/arte/video.html",
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

export const music = [{
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

export const soberynice = [{
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

export const marmotas = [{
  "type": "duo",
  "title": "@marmotasdreams",
  "url": url_insta + "/marmotasdreams"
}];

export const arte = [{
  "type": "arte",
  "title": "Youtube",
  "url": url_yout + "/channel/" + berechan
}];

export const electronica = [{
  "type": "solo",
  "title": "Berenicecream",
  "url": url_mix + "/berenicecream"
}];

export const on_click = {
  "home": ["onclick", "window.open(\'" + home[0]['url'] + "\','_top')"]
}



export const sheet = {
  "video": "./video.csv",
  "marmotas": "./marmotas.csv",
  "sobery": "./sobery.csv",
  "albums": "./albums.csv",
  "dj": "./dj.csv"
};
