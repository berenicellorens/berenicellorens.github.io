import { iframeMaxWidth } from './data.js'

export async function loader(response) {
  let rows = response.split('\n')
  // console.log("Load", rows);
  rows.forEach((row, index) => {
    if (index > 0) {
      const cols = row.split(',')
      // console.log("Cols", index, cols);
      // ignore empty lines
      if (cols[0] !== undefined && cols[1] !== undefined) {
        const title = cols[0]
        const iframe = cols[1].replaceAll('"', '')
        const art = document.createElement('article')
        const wrapper = document.createElement('div')
        const tit = document.createElement('h3')
        tit.innerHTML = title
        wrapper.className = 'iframeWrapper'
        wrapper.appendChild(tit)
        wrapper.insertAdjacentHTML('beforeend', iframe)
        art.appendChild(wrapper)
        art.setAttribute('max-width', iframeMaxWidth + 'px')
        document.querySelector('.test').appendChild(art)
      }
    }
  })
  const iframes = document.querySelectorAll('iframe')
  iframes.forEach((f) => {
    f.width = iframeMaxWidth
    f.height = iframeMaxWidth
  })
}
