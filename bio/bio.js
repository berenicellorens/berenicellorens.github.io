import { footerLinks } from '/scripts/footer.js';
import { bandcamp, soundcloud, spotify } from '/scripts/data.js';
import { langButton } from '/scripts/language.js';

langButton();
footerLinks([bandcamp, soundcloud, spotify]);
