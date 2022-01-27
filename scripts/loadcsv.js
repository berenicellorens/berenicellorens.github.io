export function loadCSV(x, callback) {
  // console.log(x);
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("text/csv");
  xobj.open('GET', x, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}