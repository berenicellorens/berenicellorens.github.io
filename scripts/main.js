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

var mobile = mobileCheck();

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

function mobileCheck()
{
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
