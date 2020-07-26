var l=[
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
	"url"  :"https://www.instagram.com/explore/tags/berenicemusic"},
{	
	"title":"@berenicellorens",
	"url"  :"https://www.instagram.com/berenicellorens"},
{
	"title":"facebook",
	"url"  :"https://www.facebook.com/berenicellorens" },
{
	"title":"twitter",
	"url"  :"https://twitter.com/berenicellorens" },
{
	"title": "berenicellorens@gmail.com",
	"url"  : "mailto:berenicellorens@gmail.com" }]



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


function main() {
	console.log("js loaded...");
	// load_footer();
}

function load_footer() {
	let footer=document.querySelector('footer');
	let i;
	let separator = document.createElement('span');
	separator.innerHTML=" | ";
	for (i=0; i<l.length; i++) {
		footer.appendChild(anchor(l[i]['url'],l[i]['title'],"_blank"));
		footer.appendChild(separator);
	}

}