if (!sz) {
  var sz = "1x1";
}
if (!tz) {
  var tz = "0";
}
var arr = sz.split("x");
var tz = tz;
var lg = lg;
var fm = fm;
var to = to;
var st = st;
var lr = lr;
var rd = rd;
if (tz == "timezone") {
  var d = new Date();
  tz = d.getTimezoneOffset() / 60;
  tz = 0 - tz;
  tz = tz + "s";
} else if (tz == "userset") {
  var d = new Date();
  tz = d.getTimezoneOffset() / 60;
  tz = 0 - tz;
}
if (!st) {
  st = "info";
}
if (!rd) {
  rd = 0;
}
if (!fm) {
  fm = "USD";
}
if (!to) {
  to = "EUR";
}
var w = parseInt(arr[0]);
var h = parseInt(arr[1]);
if (w == 1 || (w < 1 && h == 1) || h < 1) {
  w = "100%";
  if (lr == 1) {
    h = 306;
  } else {
    h = 289;
  }
}
ht_protocol = location.protocol == "https:" ? "https:" : "http:";
document.write(
  '<iframe loading="lazy" title="Currency Converter Widget" src="' +
    ht_protocol +
    "//currencyrate.today/load-converter?&lg=" +
    lg +
    "&tz=" +
    tz +
    "&fm=" +
    fm +
    "&to=" +
    to +
    "&st=" +
    st +
    "&lr=" +
    lr +
    "&rd=" +
    rd +
    '" width="' +
    w +
    '" height="' +
    h +
    '" frameborder="0" scrolling="no" loading="lazy"></iframe>'
);