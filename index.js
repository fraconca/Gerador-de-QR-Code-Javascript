// QR C
// https://www.npmjs.com/package/qrcode
var QRCode = require('qrcode');

// TEXTO E URL em CANVA
var canvas = document.getElementById('canvas');
QRCode.toCanvas(canvas, 'https://neighboruing.com.br/', function (error) {
  if (error) console.error(error);
  console.log('success!');
});

// TEXTO E URL em SVG
var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/webp',
  quality: 0.1,
  margin: 2,
  // width: 500,
  width: 500,
  color: {
    dark: '#010599FF',
    light: '#FFBF60FF',
  },
};
QRCode.toString('https://neighboruing.com.br/', opts, function (err, string) {
  if (err) throw err;
  console.log(string);
  document.getElementById('qrSVG').innerHTML = string;
});

// TEXTO E URL em JPG
var opcionalJPG = {
  errorCorrectionLevel: 'H',
  type: 'image/webp',
  quality: 0.1,
  margin: 2,
  // width: 500,
  width: 2000,
  color: {
    dark: '#000000',
    light: '#FFBF60',
  },
};
QRCode.toDataURL(
  'https://neighboruing.com.br/',
  opcionalJPG,
  function (err, url) {
    if (err) throw err;
    var img = document.getElementById('image');
    img.src = url;

    console.log(opcionalJPG);
  }
);
