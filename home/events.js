
let container = document.getElementById('lista_de_eventos');

function displayEventList (text) {
  // console.log('Display Event List', text);
  Array.from(text.split('\n')).map((string, index) => {
    const x = document.createElement('p');
    x.innerHTML = String(string).replace('\n', '');
    x.id = 'event-' + String(index);
    x.className = 'lista_de_eventos-item';
    container.appendChild(x);
  })
}

export function loadEventList(url, callback=displayEventList) {
  // console.log(url);
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("text/plain");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadEventList('events.txt')