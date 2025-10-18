// define el boton de more/less en home
const more = document.getElementById('more-button')

more.className = 'more-button'

more.onclick = function () {
  const items = document.getElementsByClassName('hidden')

  Array.from(items).map((item) => {
    item.style.display = item.style.display === 'block' ? 'none' : 'block'
  })

  more.innerHTML = more.innerHTML === 'LESS' ? 'MORE' : 'LESS'
}
