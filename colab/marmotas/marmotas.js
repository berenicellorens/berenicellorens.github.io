import { loadCSV } from '/scripts/loadcsv.js';
import { footerLinks } from '/scripts/footer.js';
import { marmotas } from '/scripts/data.js';
import { loadFile } from '/scripts/langloader.js';

loadFile('marmotas');
loadCSV('marmotas.csv');
footerLinks(marmotas);
