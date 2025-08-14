import { loadCSV } from '/scripts/loadcsv.js'

async function loader(response) {
  const section = document.querySelector('main')
  const article = document.createElement('article')
  if (section.lastChild) section.removeChild(section.lastChild)
  article.className = 'exploration_images_container'

  const text = response.split('\n')

  text.slice(1).forEach((line) => {
    const data = line.split(',')
    if (!data[0]) return // salta filas vacías

    const [name, title, description, year, media] = data

    const container = document.createElement('div') // container div
    container.className = 'exploration-container'

    const image = document.createElement('img') // imagen
    const link = document.createElement('a') // anchor sobre la imagen

    // ruta de la imagen
    const image_source = `./rayaduras/${name}`
    image.setAttribute('src', image_source)

    // título para alt
    const displayTitle = title !== '' ? title : name.replace(/\.(jpg|jpeg|png|gif)$/i, '')
    image.setAttribute('alt', displayTitle)

    // link
    link.setAttribute('href', image_source)
    link.setAttribute('title', displayTitle)
    link.setAttribute('target', '_blank')
    link.appendChild(image)

    // descripción debajo
    const descDiv = document.createElement('div')
    descDiv.className = 'desc'
    let descText = displayTitle
    if (year) descText += ` | ${year}`
    if (media) descText += ` | ${media}`
    if (description) descText += ` | ${description}`
    descDiv.innerText = descText

    // agregar al container
    container.appendChild(link)
    container.appendChild(descDiv)
    article.appendChild(container)
  })

  section.appendChild(article)
}

loadCSV('rayaduras.csv', loader)
