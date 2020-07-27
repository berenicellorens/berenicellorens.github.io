var sepchar="&nbsp;&middot;&nbsp;"

var hashtags=[
{
	"title":"#blabladuriasdeberenice",
	"url"  :"https://www.instagram.com/explore/tags/blabladuriasdeberenice" },
{
	"title":"#rayaduras_berenice",
	"url"  :"https://www.instagram.com/explore/tags/rayaduras_berenice"},
{
	"title":"#berydual",
	"url"  :"https://www.instagram.com/explore/tags/berydual"},
{
	"title":"#berenicemusic",
	"url"  :"https://www.instagram.com/explore/tags/berenicemusic"}]
var links=[
{	
	"title":"@berenicellorens",
	"url"  :"https://www.instagram.com/berenicellorens"},
{
	"title":"facebook",
	"url"  :"https://www.facebook.com/berenicellorens" },
{
	"title":"twitter",
	"url"  :"https://twitter.com/berenicellorens" }]
var email={
	"title": "berenicellorens@gmail.com",
	"url"  : "mailto:berenicellorens@gmail.com" 
}
var home=[
{"url":"https://berenicellorens.github.io/index.html","title":"Home"},
{"url":"https://berenicellorens.github.io/solo/albums.html","title":"Discografía"},
{"url":"https://berenicellorens.github.io/solo/dj.html","title":"DJ Sets"},
{"url":"https://berenicellorens.github.io/duo/marmotas.html","title":"Marmotas Dreams"},
{"url":"https://berenicellorens.github.io/duo/sobery.html","title":"SoBeryNice"},
{"url":"https://berenicellorens.github.io/arte/video.html","title":"Videoarte"},
{"url":"https://www.instagram.com/rayaduras","title":"Rayaduras"},
{"url":"https://berenicellorens.blogspot.com","title":"La Cursividad"},
{"url":"https://berenicellorens.github.io/bio/index.html","title":"Sobre mí"}, 
{"url":"https://berenicellorens.github.io/cv","title":"Cv"} 
]

function anchor(link,text,target)
{
  let tag = document.createElement('a');

  tag.setAttribute('href',link);
  tag.setAttribute('alt' ,link.length>44?link.slice(0, 44)+ " ...":link);
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target?target:"_top");

  tag.appendChild(document.createTextNode(text?text:''));

  return tag;
}

function footer(nav) {
	let footer   = document.querySelector('footer');
	let hashtdiv = document.createElement('div');
	let emaildiv = document.createElement('div');
	let linksdiv = document.createElement('div');
	let navdiv   = document.createElement('div');
	let i;
	// links
	for (i=0; i<links.length; i++) {
		let separator = document.createElement('span');
		separator.innerHTML=sepchar;
		let a=anchor(links[i]['url'],links[i]['title'],"_blank");
		linksdiv.appendChild(a);
		if (i<links.length-1) linksdiv.appendChild(separator);
	}
	// hashtags
	for (i=0; i<hashtags.length; i++) {
		let separator = document.createElement('span');
		separator.innerHTML=sepchar;
		let a=anchor(hashtags[i]['url'],hashtags[i]['title'],"_blank");
		hashtdiv.appendChild(a);
		if (i<hashtags.length-1) hashtdiv.appendChild(separator);
	}
	// email
	emaildiv.appendChild(anchor(email['url'],email['title']));
	
	if (!nav) {
		// home
		for (i=0; i<home.length; i++) {
			let separator = document.createElement('span');
			separator.innerHTML=sepchar;
			let a=anchor(home[i]['url'],home[i]['title'],"");
			navdiv.appendChild(a);
			if (i<home.length-1) navdiv.appendChild(separator);
		}
	}
	footer.appendChild(hashtdiv);
	footer.appendChild(linksdiv);
	footer.appendChild(emaildiv);
	if (!nav) footer.appendChild(navdiv);
}

