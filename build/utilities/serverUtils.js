'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeError = writeError;
exports.redirect = redirect;
exports.writeNotFound = writeNotFound;
exports.write = write;
exports.createPage = createPage;

var _zlib = require('zlib');

var _zlib2 = _interopRequireDefault(_zlib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeError(msg, res) {
  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.write('ERROR!');
  res.end();
}

function redirect(location, res) {
  res.writeHead(303, { 'Location': location });
  res.end();
}

function writeNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('Not Found');
  res.end();
}

function write(string, type, res) {
  _zlib2.default.gzip(string, function (err, result) {
    res.writeHead(200, {
      'Content-Length': result.length,
      'Content-Type': type,
      'Content-Encoding': 'gzip'
    });
    res.write(result);
    res.end();
  });
}
// export function serveStye(location){
//   return location
// }
function createPage(html) {
  return '\n  <!doctype html>\n  <html>\n    <head>\n      <meta charset="utf-8"/>\n      <title>Bryan Schauerte</title>\n        <link href=\'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700\' rel=\'stylesheet\' type=\'text/css\'>\n        <script src="https://use.fontawesome.com/6054dcb69e.js"></script>\n      <link rel="stylesheet" type="text/css" href="/style.css">\n    </head>\n    <body>\n      <div id="app">' + html + '</div>\n      <script src="/app.js"></script>\n\n    </body>\n\n  </html>\n  ';
}