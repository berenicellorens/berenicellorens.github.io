import { loadCSV } from '/scripts/loadcsv.js';
import { footerLinks } from '/scripts/footer.js';
import { sobery } from '/scripts/data.js';
import { loadFile } from '/scripts/langloader.js';

loadFile('sobery');
loadCSV('sobery.csv');
footerLinks(sobery, 'btn');
