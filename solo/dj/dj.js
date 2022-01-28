import { mixcloud } from '/scripts/data.js';
import { loadCSV } from '/scripts/loadcsv.js'
import { footerLinks } from '/scripts/footer.js';

loadCSV('dj.csv');

footerLinks([mixcloud], 'btn');