
export const beretags = [
  "berenicemusic",
  "blabladuriasdeberenice",
  "rayaduras_berenice",
  "berydual",
  "movienicemusic",
];

export const name = "berenicellorens";

export const sepchar = "&nbsp;&middot;&nbsp;";


// Tamaño del icono en el footer
export const iconsize = 50;

// Tamaño de los videos o iframes en la página
export const iframeMaxWidth = 300;

export const hashtags = beretags.map((tag) => {
  return {
    "title": "#" + tag,
    "url": "https://www.instagram.com/explore/tags/" + tag
  }
});
export const youtube = {
  "name": "YouTube",
  "title": "Watch Berenice Llorens on YouTube",
  "url": "https://www.youtube.com/channel/UCop84-W9fYAEaZfICstuvMA",
  "img": "/img/youtube.png",
}
export const soundcloud = {
  "name": "Soundcloud",
  "title": "Listen to Berenice Llorens on Soundcloud",
  "url": "https://soundcloud.com/berenicellorens",
  "img": '/img/soundcloud.png'
}
export const instagram = {
  "name": "@berenicellorens",
  "title": "Follow @berenicellorens on Instagram",
  "url": "https://www.instagram.com/berenicellorens",
  "img": '/img/instagram.png'
}
export const spotify = {
  "name": "Spotify",
  "title": "Listen to Berenice Llorens on Spotify",
  "url": "https://open.spotify.com/artist/1wkoEOAEYnEflO8as4GCPG?si=3NvtjUmPSIyR4BTm6Mt3fA",
  "img": '/img/spotify.png'
}
export const bandcamp = {
  "name": "Bandcamp",
  "title": "Listen to Berenice Llorens on Bandcamp",
  "url": "https://berenicellorens.bandcamp.com",
  "img": '/img/bandcamp.png'
}
export const cursividad = {
  "type": "arte",
  "name": "La Cursividad",
  "title": "Read Berenice Lloren's blog: La Cursividad",
  "url": "https://berenicellorens.blogspot.com",
}

export const rayaduras = {
  "type": "arte",
  "name": "Rayaduras",
  "title": "Follow @rayaduras on Instagram",
  "url": "https://www.instagram.com/rayaduras",
}

export const gmail = {
  "name": "Email",
  "title": "Email Berenice Llorens",
  "url": "mailto:berenicellorens@gmail.com"
}

export const links = [instagram, spotify, bandcamp, soundcloud];

export const emails = [gmail];

export const marmotas = [{
  "type": "duo",
  "name": "@marmotasdreams",
  "title": "Follow @marmotasdreams on Instagram",
  "url": "https://www.instagram.com/marmotasdreams"
}]

export const sobery = [{
  "type": "duo",
  "name": "@soberynice",
  "title": "Follow @soberynice on Instagram",
  "url": "https://www.instagram.com/soberynice"
},
{
  "type": "duo",
  "name": "SoBeryNice",
  "title": "Listen to SoBeryNice on Mixcloud",
  "url": "https://www.mixcloud.com/SoBeryNice"
}]

export const home = [{
  "name": "Home",
  "url": "/home/",
},
{
  "type": "bio",
  "name": "Bio",
  "url": "/bio/",
},
{
  "type": "bio",
  "name": "CV",
  "url": "/cv",
},
{
  "type": "albums",
  "name": "Discos",
  "url": "/music/albums/",
},
{
  "type": "dj",
  "name": "Dj Sets",
  "url": "/music/dj/",
},
{
    "type": "radio",
    "name": "Radio Works",
    "url": "/music/radio/",
  },
{
  "type": "duo",
  "name": "Marmotas Dreams",
  "url": "/duo/marmotas/",
},
{
  "type": "duo",
  "name": "SoBeryNice",
  "url": "/duo/sobery/",
},
{
  "type": "duo",
  "name": "toros",
  "title": "Duo with ffddcchh",
  "url": "https://fdch.github.io/toros",
},
{
  "type": "explorations",
  "name": "Videoarte",
  "url": "/explorations/video/",
}, rayaduras, cursividad ];
