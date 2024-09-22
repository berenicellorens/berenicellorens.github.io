import { soundcloud, youtube } from '/scripts/data.js';
import { loadCSV } from '/scripts/loadcsv.js'
import { footerLinks } from '/scripts/footer.js';

loadCSV('radio.csv');

footerLinks([soundcloud, youtube], 'btn');
