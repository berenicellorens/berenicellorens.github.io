import { loader } from "./loader.js";

export function loadCSV(url, callback=loader) {
  // console.log(url);
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("text/csv");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}
