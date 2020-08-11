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

var bio="Berenice Llorens, artista cordobesa que busca expandir los límites del género, tanto en música como en poesía, con palabras, improvisaciones, imágenes, sonidos y ritmos que invitan a una escucha híbrida entre el cuerpo y el movimiento. Su trabajo está disponible en: "+url_root;


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


var fullname="Berenice Llorens";
var idioma="es-AR"
var bere="berenicellorens";
var url_insta="https://www.instagram.com";
var url_face="https://www.facebook.com";
var url_twit="https://www.twitter.com";
var root=bere+".github.io";
var url_root="https://"+root;
var sepchar="&nbsp;&middot;&nbsp;";
var raw="https://raw.githubusercontent.com";
var url_ico=raw+"/"+bere+"/"+root+"/master/img/logo.ico";
var url_jpg=raw+"/"+bere+"/"+root+"/master/img/logo.jpg";
var insta_png=raw+"/"+bere+"/"+root+"/master/img/instagram.png";
var faceb_png=raw+"/"+bere+"/"+root+"/master/img/facebook.png";
var twitt_png=raw+"/"+bere+"/"+root+"/master/img/twitter.png";

var viewport_settings=[
	"width=device-width",
	"minimum-scale=1.0",
	"maximum-scale=1.0",
	"user-scalable=no",
];

var iconsize = 35;
var bRad = 0;

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
}
];

var mobile = mobileCheck();

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


for (h in beretags) {
	hashtags.push({
		"title":"#"+beretags[h],
		"url":url_insta+"/explore/tags/"+beretags[h]
	});
};


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

function footer(nav) {
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

function nav() {
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
