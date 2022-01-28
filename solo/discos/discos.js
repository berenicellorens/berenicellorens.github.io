import { bandcamp, soundcloud, spotify } from '/scripts/data.js';
import { loadCSV } from '/scripts/loadcsv.js'
import { footerLinks } from '/scripts/footer.js';

loadCSV('discos.csv');

footerLinks([bandcamp, soundcloud, spotify], 'btn');