var proxy = require('html2canvas-proxy');
var express = require('express');
const port = process.env.PORT || 4848;

var app = express();
app.use('/proxy/', proxy());
app.use('/assets/',express.static('../html2canvas/dist/'));

app.listen(port, () => {
  console.log(`Proxy listening on port ${port}`)
});