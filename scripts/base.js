import { footer } from '/scripts/footer.js';
import { backButton } from '/scripts/backbutton.js'

footer();

backButton();

// google analytics stuff
window.dataLayer = window.dataLayer || [];
export function gtag() { dataLayer.push(arguments) };
gtag('js', new Date());
gtag('config', 'UA-173546930-1');