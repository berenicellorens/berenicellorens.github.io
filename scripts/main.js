///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


var beretags=[
	"berenicemusic",
	"blabladuriasdeberenice",
	"rayaduras_berenice",
	"berydual",
	"movienice",
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


beremarquee = [
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
var fullname="Berenice Llorens";
var idioma="es-AR"



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


var bere="berenicellorens";
var url_insta="https://www.instagram.com";
var url_face="https://www.facebook.com";
var url_twit="https://www.twitter.com";
var url_root="https://"+bere+".github.io";
var sepchar="&nbsp;&middot;&nbsp;";
var raw="https://raw.githubusercontent.com";
var url_ico=raw+"/"+bere+"/"+url_root+"/master/img/logo.ico";
var url_jpg=raw+"/"+bere+"/"+url_root+"/master/img/logo.jpg";

var viewport_settings=[
	"width=device-width",
	"minimum-scale=1.0",
	"maximum-scale=1.0",
	"user-scalable=no",
];

let h,hashtags=[];

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

var links=[
{	
	"title":"@"+bere,
	"url"  :url_insta+"/"+bere
},
{
	"title":"facebook",
	"url"  :url_face+"/"+bere 
},
{
	"title":"twitter",
	"url"  :url_twit+"/"+bere 
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
	"url":url_root+"/home/index.html",
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
	add_key(hashtags[0],"type","solo"),
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
	"url":url_root+"/bio/index.html",
},
{
	"type":"bio",
	"title":"Cv",
	"url":url_root+"/cv",
}
];

function anchor(link,text,target)
{
  let tag = document.createElement('a');

  tag.setAttribute('href',link);
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target?target:"_top");
  tag.appendChild(document.createTextNode(text?text:''));

  return tag;
};

function append_to_div(array) {
	let target = document.createElement('div');
	for (i=0; i<array.length; i++) {
		let separator = document.createElement('span');
		separator.innerHTML = sepchar;
		let a = anchor(array[i]['url'],array[i]['title']);
		target.appendChild(a);
		if (i<array.length-1)
			target.appendChild(separator);
	}
	return target;
};

function footer(nav) {
	let footer   = document.querySelector('footer');
	let foot  = document.createElement('div');
	foot.setAttribute('id','foot');
	foot.appendChild(append_to_div(hashtags));
	foot.appendChild(append_to_div(links));
	foot.appendChild(append_to_div(emails));
	if (!nav) foot.appendChild(append_to_div(home));
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

butenice=[
"BER",
"EN",
"ICE"];

function ber() {
	let body = document.querySelector('body');
	let i;
	for (i=0; i<17; i++) {
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



// global_tags=[
// {
//  	"tag":"meta",
//  	"attributes": [
//  		{
//  			"key":"name",
//  			"value":"headline",
//  		},
//  		{
//  			"key":"content",
//  			"value":fullname
//  		}]
// },
// {
//  	"tag":"meta",
//  	"attributes": [
//  		{
//  			"key":"name",
//  			"value":"url"
//  		},
//  		{
//  			"key":"content",
//  			"value":url_root
//  		}]
// },
// {
//  	"tag":"meta",
//  	"attributes": [
//  		{
//  			"key":"name",
//  			"value":"@type",
//  		},
//  		{
//  			"key":"content",
//  			"value":"WebSite"
//  		}]
// },
// {
//  	"tag":"meta",
//  	"attributes": [
//  		{
//  			"key":"property",
//  			"value":"og:locale",
//  		},
//  		{
//  			"key":"content",
//  			"value":idioma
//  		}]
// },
// {
//  	"tag":"meta",
//  	"attributes": [
//  		{
//  			"key":"name",
//  			"value":"viewport",
//  		},
//  		{
//  			"key":"content",
//  			"value":viewport_settings.join(",")
//  		}]
// },
// {
//  	"tag":"meta",
//  	"attributes": [
//  		{
//  			"key":"http-equiv",
//  			"value":"X-UA-Compatible",
//  		},
//  		{
//  			"key":"content",
//  			"value":"IE=edge"
//  		}]
// },
// {
// 	"tag":"meta",
// 	"attributes": [
//  		{
//  			"key":"property",
// 			"value":"content",
// 		},
// 		{
// 			"key":"og:image",
// 			"value":url_jpg
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
//  			"value":"og:image:type",
// 		},
// 		{
// 			"key":"content",
// 			"value":"image/jpg"
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
//  			"key":"content",
// 			"value":"500"
// 		},
// 		{
// 			"key":"property",
// 			"value":"image:width",
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
// 			"value":"image:height",
// 		},
// 		{
// 			"key":"content",
// 			"value":"500"
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"name",
// 			"value":"robots",
// 		},
// 		{
// 			"key":"content",
// 			"value":"index,follow"
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"name",
// 			"value":"keywords",
// 		},
// 		{
// 			"key":"content",
// 			"value":keywords.join(',')+beretags.join(',')
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
// 			"value":"og:site_name",
// 		},
// 		{
// 			"key":"content",
// 			"value":bere
// 		}]
// },
// { 
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
// 			"value":"og:url",
// 		},
// 		{
// 			"key":"content",
// 			"value":url_root
// 		}]
// },
// { 
// 	"tag":"link",
// 	"attributes": [
//  		{
// 			"type":"rel",
//  			"name":"icon",
// 		},
// 		{
// 			"key":"href",
// 			"value":url_ico,
// 		},
// 		{
// 			"key":"type",
// 			"value":"image/ico"
// 		},
// 		{
// 			"key":"title",
// 			"value":bere
// 		}]
// },
// { 
// 	"tag":"link",
// 	"attributes": [
//  		{
// 			"key":"rel",
//  			"value":"fluid-icon",
// 		},
// 		{
// 			"key":"href",
// 			"value":url_jpg,
// 		},
// 		{
// 			"key":"type",
// 			"value":"image/jpg"
// 		},
// 		{
// 			"key":"title",
// 			"value":bere
// 		}]
// },
// { 
// 	"tag":"link",
// 	"attributes": [
//  		{
// 			"key":"rel",
// 			"value":"canonical",
// 		},
// 		{
// 			"key":"href",
// 			"value":url_root
// 		}]
// },
// {
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
// 			"value":"twitter:description",
// 		},
// 		{
// 			"key":"content",
// 			"value":bio
// 		}]
// },
// {
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
// 			"value":"og:description",
// 		},
// 		{
// 			"key":"content",
// 			"value":bio
// 		}]
// },
// {
// 	"tag":"meta",
// 	"attributes": [
//  		{
// 			"key":"property",
// 			"value":"description",
// 		},
// 		{
// 			"key":"content",
// 			"value":bio
// 		}]
// }];

// function meta() {
// 	let i, head=document.head;
// 	for (i=0;i<global_tags.length;i++) {
// 		let e=global_tags[i];
// 		let j=0, t=document.createElement(e['tag']), att=e['attributes'];
// 		for(j in att) t.setAttribute(att[j]['key'],att[j]['value']);
// 		head.appendChild(t)
// 	}
// 	console.log(head);
// }