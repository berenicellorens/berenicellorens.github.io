import { loadCSV } from '/scripts/loadcsv.js';
import { footerLinks } from '/scripts/footer.js';
import { sobery } from '/scripts/data.js';
import { langButton } from '/scripts/language.js';

langButton();

loadCSV('sobery.csv');

footerLinks(sobery);

