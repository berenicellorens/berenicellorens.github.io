function displayEventList(container, text) {
  let classname = String(container) + '-item';
  let ul = document.getElementById(container);
  // por cada linea en el texto, crear un nuevo elemento
  Array.from(text.split('\n')).map((s, index) => {
    // ignorar lineas vacias
    if (s === '') return;
    let x = document.createElement('li');
    let string = String(s).trim().replace('\n', '');
    // si la linea empieza con 'YEAR'
    if (string.startsWith('YEAR')) {
      x.innerHTML = string.replace('YEAR:', '');
      x.className = classname;
      ul.appendChild(document.createElement('br'));
    } else {
      // esta linea ya es de un evento entonces crear un nuevo item en la lista
      x.innerHTML = string;
      x.id = 'event-' + String(classname) + '-' + String(index); //asignar un id con el indice en la lista
      x.className = classname;
    }
    ul.appendChild(x);
  })
}

export function loadEventList(container, url) {
  // console.log(url);
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("text/plain");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      displayEventList(container, xobj.responseText);
    }
  };
  xobj.send(null);
}

loadEventList('lista_de_eventos', 'events.txt')
loadEventList('lista_de_eventos-past', 'events-past.txt')
