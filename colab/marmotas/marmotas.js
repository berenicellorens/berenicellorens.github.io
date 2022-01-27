import { loadCSV } from '/scripts/loadcsv.js';
import { footerLinks } from '/scripts/footer.js';
import { marmotas } from '/scripts/data.js';
import { langButton } from '/scripts/language.js';

langButton();

loadCSV('marmotas.csv');

footerLinks(marmotas);
