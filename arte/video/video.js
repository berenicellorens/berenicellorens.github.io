import { youtube } from '/scripts/data.js';
import { loadCSV } from '/scripts/loadcsv.js';
import { footerLinks } from '/scripts/footer.js';

loadCSV('video.csv');

footerLinks([youtube]);