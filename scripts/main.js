///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


var beretags=[
	"berenicemusic",
	"blabladuriasdeberenice",
	"rayaduras_berenice",
	"berydual",
	"movienicemusic",
];

var keywords=[
	"berenicellorens",
	"dj",
	"composer",
	"artist",
	"electronics",
	"live-video",
	"instrumental",
];




var beremarquee = [
"berenicemusic",
"blabladuriasdeb",
"berenicellorens",
"berenicellorens",
"blablablablabla",
"rayadurasdeber",
"movieniceberenice",
"erenicellorensber",
"renicellorensber",
"bereniceberenice",
"nicellorensnicebe",
"icellorensicellor",
"llorensllorenslor",
"e n e n e n e n e",
"i c e i c e i c e",
"b e r b e r b e r",
]


var butenice=[
"BER",
"EN",
"ICE"];


var fullname  = "Berenice Llorens";
var idioma    = "es-AR";
var bere      = "berenicellorens";
var url_insta = "https://www.instagram.com";
var url_face  = "https://www.facebook.com";
var url_twit  = "https://www.twitter.com";
var url_sound = "https://www.soundcloud.com";
var url_mix   = "https://www.mixcloud.com";
var url_yout  = "https://www.youtube.com"
var berechan  = "UCop84-W9fYAEaZfICstuvMA"
var root      = bere + ".github.io";
var url_root  = "https://"+root;
var sepchar   = "&nbsp;&middot;&nbsp;";
var raw       = "https://raw.githubusercontent.com";
var url_img   = raw + "/" + bere + "/" + root + "/master/img";
var url_ico   = url_img + "/logo.ico";
var url_jpg   = url_img + "/logo.jpg";
var insta_png = url_img + "/instagram.png";
var faceb_png = url_img + "/facebook.png";
var twitt_png = url_img + "/twitter.png";
var back_img  = url_img + "/back.gif";
var url_cv_logo = raw + "/" + bere + "/cv/master/bere-logo.jpeg";
var url_bandcamp = "https://"+bere+".bandcamp.com";
var bio=""Berenice Llorens es artista, compositora y DJ cordobesa. Su carrera comienza en el 2007 participando como tecladista, bajista y guitarrista en bandas de reggae, afrobeat, rock alternativo y pop. Desde el inicio y, con búsqueda y estilo propio, desarrolla un repertorio solista de obras y canciones experimentales que, en el 2017, comienzan a tener una fuerte influencia de procesos y música electrónica, año que marca el inicio de su carrera como DJ y productora. Su trabajo está disponible en: "+url_root;

var back_img_width = 50;

var viewport_settings=[
	"width=device-width",
	"minimum-scale=1.0",
	"maximum-scale=1.0",
	"user-scalable=no",
];

var iconsize = 35;
var bRad = 0;
var make_back_image=false;
var h, hashtags=[];


var links=[
{	
	"title":"@"+bere,
	"url"  :url_insta+"/"+bere,
	"img"  :insta_png
},
{
	"title":"facebook/berenicellorens",
	"url"  :url_face+"/"+bere,
	"img"  :faceb_png
},
{
	"title":"@berenicellorens",
	"url"  :url_twit+"/"+bere,
	"img"  :twitt_png
}
];

var emails= [
{
	"title": bere+"@gmail.com",
	"url"  : "mailto:"+bere+"@gmail.com" 
}
];

var home=[
{
	"title":"Home",
	"url":url_root+"/home",
},
{
	"type":"solo",
	"title":"Discos",
	"url":url_root+"/solo/albums.html",
},
{
	"type":"solo",
	"title":"Electrónica",
	"url":url_root+"/solo/dj.html",
},
	// add_key(hashtags[0],"type","solo"),
{
	"type":"duo",
	"title":"Marmotas Dreams",
	"url":url_root+"/duo/marmotas.html",
},
{
	"type":"duo",
	"title":"SoBeryNice",
	"url":url_root+"/duo/sobery.html",
},
{
	"type":"arte",
	"title":"Videoarte",
	"url":url_root+"/arte/video.html",
},
{
	"type":"arte",
	"title":"Rayaduras",
	"url":url_insta+"/rayaduras",
},
{
	"type":"arte",
	"title":"La Cursividad",
	"url":"https://"+bere+".blogspot.com",
},
{
	"type":"bio",
	"title":"Sobre mí",
	"url":url_root+"/bio",
},
{
	"type":"bio",
	"title":"Cv",
	"url":url_root+"/cv",
}];

var music=[
{
	"type":"solo",
	"title":"Bandcamp",
	"url":url_bandcamp
},
{
	"type":"solo",
	"title":"Soundcloud",
	"url":url_sound+"/"+bere
}];

var soberynice=[
{
	"type":"duo",
	"title":"@soberynice",
	"url":url_insta+"/soberynice"
},
{
	"type":"duo",
	"title":"Mixcloud",
	"url":url_mix+"/SoBeryNice"
}];

var marmotas=[
{
	"type":"duo",
	"title":"@marmotasdreams",
	"url":url_insta+"/marmotasdreams"
}
];

var arte=[
{
	"type" :"arte",
	"title":"Youtube",
	"url"  : url_yout + "/channel/" + berechan
}];

var electronica=[
{
	"type" : "solo",
	"title": "Berenicecream",
	"url"  : url_mix + "/berenicecream"
}];

var on_click = {
	"home": ["onclick", "window.open(\'"+home[0]['url']+"\','_top')"]
}

var mobile  = mobileCheck();
var gs_url  = "https://spreadsheets.google.com/feeds/list";
var gs_id   = "1j3mYdWxe5l7S_VheFBwl3g8IjUc7DyfKHKIHeOetMg8";
var gs_type = "public/values?alt=json";

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

for (h in beretags) {
	hashtags.push({
		"title":"#"+beretags[h],
		"url":url_insta+"/explore/tags/"+beretags[h]
	});
};

var sheet=[];
for (let i=1;i<7;i++) sheet[i]=gs_url+"/"+gs_id+"/"+i.toString()+"/"+gs_type;


function add_key(object, key, value) {
	let obj=object;
	obj[key]=value;
	return obj;
};

function img(src,width,titl,id,tURL)
{
  let tag = document.createElement('img');
  let div = document.createElement('div');
  tag.setAttribute('src', src);
  let anc = anchor(src);
  if (width)
  { 
    tag.setAttribute('width', width+bRad);
    div.style.width = width+"px";
  }
  if (titl)  {
  	tag.setAttribute('title', titl);
  	tag.setAttribute('alt', titl);
  }
  if (id)    tag.setAttribute('id',id);
  if (tURL)  anc = anchor(tURL,'',"_blank");
  div.style.overflow = "hidden";
  div.style.borderRadius = bRad+"px";
  anc.appendChild(tag);
  div.appendChild(anc);
  return div;      
}

function anchor(link,text='',target="_top")
{
  let tag = document.createElement('a');

  tag.setAttribute('href',link);
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target);
  tag.appendChild(document.createTextNode(text));

  return tag;
};

function append_to_div(array,tgt="_top",icon=0) {
	let a,sep,target = document.createElement('div');
	for (i=0; i<array.length; i++) {
		if (!icon) {
			sep = document.createElement('span');
			sep.innerHTML = sepchar;
			a = anchor(array[i]['url'],array[i]['title'],tgt);
		} else {
			a = img(array[i]['img'],
					icon,
					array[i]['title'],
					array[i]['title'],
					array[i]['url'])
		}
		target.appendChild(a);
		if (i<array.length-1 && !icon)
			target.appendChild(sep);
	}
	return target;
};

function footer(nav=false) {
	let footer = document.querySelector('footer');
	let foot   = document.createElement('div');
	foot.setAttribute('id','foot');

	let ht=append_to_div(hashtags,"_blank");
	ht.setAttribute('id',"hashtags");
	
	let ln=append_to_div(links,"_blank",iconsize);
	ln.setAttribute('id',"links");
	let em=append_to_div(emails,"_blank");
	em.setAttribute('id',"emails");
	
	foot.appendChild(ht);
	foot.appendChild(em);
	foot.appendChild(ln);
	
	if (!nav)  {
		let hm=append_to_div(home);
		hm.setAttribute('id',"home");
		foot.appendChild(hm);
	}
	
	footer.appendChild(foot);

};

function make_nav() {
	let header   = document.querySelector('header');
	let nav = document.createElement('nav');
	let menu = document.createElement('ul');
	let i,type="none",menuitem,menutitle,submenu;

	for (i=1; i<home.length; i++) {
		let ntype=home[i]['type'];
		if (type.localeCompare(ntype)) {
			//is new menuitem
			menuitem = document.createElement('li');
			menutitle=document.createElement('span');
			menutitle.setAttribute('class','colored');
			menutitle.innerHTML=ntype;
			menuitem.appendChild(menutitle);
			menu.appendChild(menuitem);
			submenu = document.createElement('ul');
		}
		submenuitem = document.createElement('li');
		submenuitem.appendChild(anchor(home[i]['url'],home[i]['title']));
		submenu.appendChild(submenuitem);
		menuitem.appendChild(submenu);
		type=ntype;
	}
	// console.log(menu);
	nav.appendChild(menu);
	header.appendChild(nav);
};

function make_article(title,content) {
	let titlediv = document.createElement('h3');
	titlediv.appendChild(document.createTextNode(title));

	let article = document.createElement('article');
	article.appendChild(titlediv);

	for (let i=0;i<content.length;i++) article.appendChild(content[i]);

	return article;
}


function make_bio(subtitletext) {
	
	let bioimgdiv = document.createElement('div');
	let biotxtdiv = document.createElement('div');
	let bioimg = document.createElement('img');
	let biotxt = document.createElement('p');

	bioimg.setAttribute('src', url_cv_logo);
	bioimg.setAttribute('class','image-container');
	biotxt.appendChild(document.createTextNode(bio));
	bioimgdiv.appendChild(bioimg);
	biotxtdiv.appendChild(biotxt);


	return [ make_article(subtitletext, [bioimgdiv, biotxtdiv]) ];
}

function make_title (titletext,backbutton=true) {
	let titlediv = document.createElement('div');
	
	titlediv.setAttribute('class','title');
	
	let title = document.createElement('h1');
	
	title.appendChild(document.createTextNode(titletext));
	
	titlediv.appendChild(title);

	if(backbutton) {

		let backdiv = document.createElement('div');
		backdiv.setAttribute('class','back');

		Element.prototype.setAttribute.apply(backdiv,on_click['home'])
		
		
		let backimg = document.createElement('img');
		let backtext = document.createElement('div');
		backtext.appendChild(document.createTextNode('home'));
		
			if (make_back_image) {
				// make back image
				backimg.setAttribute('src',back_img);
				backimg.setAttribute('width',back_img_width);
				backdiv.appendChild(backimg);
			} else {
				backdiv.appendChild(backtext)
			}
		titlediv.appendChild(backdiv);
		
	}

	return titlediv;
}

function make_subtitle (title,url,text,type='h2') {
	let subtitle = document.createElement(type);
	subtitle.appendChild(document.createTextNode(title));
	if (url) subtitle.appendChild(anchor(url?url:"/",text?text:title));
	return subtitle;
}

function make_footlink (links) {
	let footdiv = append_to_div(links,"_blank");
	footdiv.setAttribute('id',"div");
	
	return footdiv;
}
function load(main,sheet) {
	loadJSON(sheet, async function(response) {
		var f, e, i, entry;
		f = JSON.parse(response);
		entry = f.feed.entry;
		for (i in entry) {
		  e = entry[i];
		  var title  = e.gsx$title.$t;
		  var iframe = e.gsx$iframe.$t;
		  let art=document.createElement('article');
		  let tit=document.createElement('h3');
		  tit.innerHTML=title;
		  art.appendChild(tit);
		  art.insertAdjacentHTML('beforeend',iframe);
		  main.appendChild(art);
		}
	});
}

function make(page, footnav=false) {
	let titlediv, subtitlediv, subsubtitlediv, articles=[], footlink=[];
	let main = document.querySelector('main');
	let foot = document.querySelector('footer');
	let dark=false;
	
	switch(page) {
		case "bio":
			titlediv = make_title("Sobre mí");
			articles = make_bio("Bio");
			foot.appendChild(make_footlink(music));
			// load(main, sheet[6]);
			break;
		case "marmotas":
			titlediv = make_title("Marmotas Dreams");
			subtitlediv = make_subtitle("duo con ",
				url_insta+"/constanzapellici",
				"Constanza Pellici");
			foot.appendChild(make_footlink(marmotas));
			load(main, sheet[5]);
			break;
		case "sobery":
			titlediv = make_title("SoBeryNice");
			subtitlediv = make_subtitle("duo con ",
				url_insta+"/sopiuzzi",
				"So Piuzzi");
			foot.appendChild(make_footlink(soberynice));
			load(main, sheet[4]);
			dark = true;
			break;
		case "arte":
			titlediv = make_title("Videoarte");
			foot.appendChild(make_footlink(arte));
			load(main, sheet[3]);
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
		case "home":
			titlediv = make_title(bere,false);
			subtitlediv = make_subtitle("artista · dj · productora");
			subsubtitlediv = make_subtitle("arte sonoro",false,'','h4');
			footnav = true;
			break;
		default:
			break;
	}
	// append to page
	let header = document.querySelector('header');
	header.appendChild(titlediv);

	if (subtitlediv) header.appendChild(subtitlediv);
	if (subsubtitlediv) header.appendChild(subsubtitlediv);
	
	for (let i=0;i<articles.length;i++) main.appendChild(articles[i]);
	
	if (footnav) make_nav();
	
	footer(footnav, dark);
}




function ber() {
	let body = document.querySelector('body');
	let i,s;
	if (mobile) { 
		s=4;
	} else {
		s=17;
	}  
	for (i=0; i<s; i++) {
		let bermarquee = document.createElement('marquee');
		bermarquee.setAttribute('scrolldelay',i*3);
		bermarquee.setAttribute('style','width:'+Math.floor(Math.random()*300+100)+"px")
		bermarquee.innerHTML = beremarquee[i%beremarquee.length];
		let h1=document.createElement('h1');
		h1.appendChild(bermarquee);
		
		(function(i) {
        setTimeout(function () {
            // console.log(i);
			body.appendChild(h1);
        }, Math.floor(Math.random() * 1000));
    	})(i);
	}
	setTimeout(function() {
		let but = document.createElement('div');
		but.setAttribute('id','but');
		for (x in butenice) {
			(function(x) {
			setTimeout(function() {
				let div=document.createElement('div');
				div.setAttribute('onclick',"window.open(\'"+home[0]['url']+"\','_top')");
				let span=document.createElement('span');
				span.innerHTML = butenice[x];
				div.appendChild(span);
				but.appendChild(div);
				body.appendChild(but);
			}, 450);
			})(x);
		}
	}, 4500);
}

function mobileCheck()
{
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}


function loadJSON(x,callback)
{
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
