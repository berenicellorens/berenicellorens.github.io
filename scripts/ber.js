/*
 * This function is called by the landing page on a script tag
 * It places multiple floating berenice marquee elements accross the screen
 * And then places a button to go to the home page
 *
 */
import { mobile } from './mobile.js'

// Velocidad de las palabras
const scrolldelay = 4
const scrollspeed = [5, 12]
const scrollwidth = [150, 350]
const beremarquee = [
  'experimental',
  'MONTE',
  'ser',
  'ecosystem',
  'territories',
  'ver',
  'TERRITORIO',
  'observar',
  'adaptación',
  'words',
  'memory',
  'sounds',
  'do you listen?',
  'integrate',
  'UN GRITO', 
  'artificial',
  'play',
  'escuchar con el CUERPO',
  'time',
   'UNA PALABRA, UN PENSAMIENTO',
  'broken paths',
  'noises',
  'pulse',
  'broken',
  'dice',
  'explorar',
]

// boton BER EN ICE minimum height and width

export function ber() {
  // This helper returns a random integer given a offset and a range
  function rand(offset, range) {
    return Math.floor(Math.random() * range + offset)
  }

  // This helper fires up a `func`tion after a `time` in miliseconds
  async function setRandTimeout(func, time) {
    return setTimeout(func, rand(0, time))
  }

  const timeToWaitForButton = 2000 // in milliseconds
  const documentBody = document.querySelector('body')
  const homeButtonWrapper = document.createElement('button')

  // Place the floating berenice marquee elements
  // 16 if we are on a mobile device, 17 otherwise
  for (let i = 0; i < (mobile ? 16 : 40); i++) {
    const span = document.createElement('span')
    const b = document.createElement('marquee')
    b.setAttribute('scrolldelay', i * scrolldelay)
    b.setAttribute('scrollamount', rand(scrollspeed[0], scrollspeed[1]))
    b.style.width = rand(scrollwidth[0], scrollwidth[1]) + 'px'
    b.innerHTML = beremarquee[i % beremarquee.length]
    span.appendChild(b)
    setRandTimeout(() => documentBody.appendChild(span), timeToWaitForButton)
  }

  setTimeout(() => {
    // Prepare the floating berenice button
    homeButtonWrapper.onclick = () => (document.location.href = 'home/')
    homeButtonWrapper.innerHTML = 'berenice/lorens'
    documentBody.appendChild(homeButtonWrapper)
  }, timeToWaitForButton)
}
