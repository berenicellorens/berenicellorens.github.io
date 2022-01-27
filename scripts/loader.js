export async function loader(response) {
  let rows = response.split("\n");
  // console.log("Load", rows);
  rows.forEach((row, index) => {
    if (index > 0) {

      const cols = row.split(",");
      // console.log("Cols", index, cols);
      // ignore empty lines
      if (cols[0] !== undefined && cols[1] !== undefined) {
        const title = cols[0];
        const iframe = cols[1].replaceAll("\"", "");
        const art = document.createElement('article');
        const div = document.createElement('div');
        const tit = document.createElement('h3');
        tit.innerHTML = title;
        div.className = 'iframeWrapper';
        art.appendChild(tit);
        art.appendChild(div);
        div.insertAdjacentHTML('beforeend', iframe);
        document.querySelector('main').appendChild(art);
      }
    }
  });
}
