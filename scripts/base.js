import { backButton } from '/scripts/backbutton.js'

backButton();

// google analytics stuff
window.dataLayer = window.dataLayer || [];
export function gtag() { dataLayer.push(arguments) };
gtag('js', new Date());
gtag('config', 'UA-173546930-1');