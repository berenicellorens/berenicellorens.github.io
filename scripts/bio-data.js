

// var bioData=[];

// function make_bio() {

// 	let bioimgdiv = document.createElement('div');
// 	let biotxtdiv = document.createElement('div');
// 	let bioimg = document.createElement('img');
// 	let biotxt = document.createElement('p');

// 	//bio
// 	if(bioData.length==0)
// 	{
// 		loadCSV(sheet[6], async function(response) {
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
