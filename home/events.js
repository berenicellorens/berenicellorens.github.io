function displayEventList(container, text, hideable) {
  let classname = String(container) + '-item';
  let ul = document.getElementById(container);
  // por cada linea en el texto, crear un nuevo elemento
  Array.from(text.split('\n')).map((s, index) => {
    // ignorar lineas vacias
    if (s === '') return;
    let x = document.createElement('li');
    let string = String(s).trim().replace('\n', '');
    let class_name = classname + String(hideable && index > 5 ? ' hidden' : '')
    // si la linea empieza con 'YEAR'
    if (string.startsWith('YEAR')) {
      x.innerHTML = string.replace('YEAR:', '');
      x.className = class_name;
      ul.appendChild(document.createElement('br'));
    } else {
      // esta linea ya es de un evento entonces crear un nuevo item en la lista
      x.innerHTML = string;
      x.id = 'event-' + String(classname) + '-' + String(index); //asignar un id con el indice en la lista

      x.className = class_name;
    }
    ul.appendChild(x);
  });
  if (hideable) {
    const more = document.createElement('li');
    more.innerHTML = 'More';
    more.className = 'more-button';
    more.onclick = function() {
      const items = document.getElementsByClassName('hidden');
      Array.from(items).map((item) => {
        item.style.display = item.style.display === 'block' ? 'none' : 'block';
      });
      more.innerHTML = more.innerHTML === 'More' ? 'Less' : 'More';
    }
    ul.appendChild(more);
  }
}

export function loadEventList(container, url, hideable) {
  // console.log(url);
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("text/plain");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      displayEventList(container, xobj.responseText, hideable);
    }
  };
  xobj.send(null);
}

loadEventList('lista_de_eventos', 'events.txt', false)
loadEventList('lista_de_eventos', 'events-past.txt', true)
