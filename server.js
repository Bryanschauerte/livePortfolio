var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8811;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'))
app.use(cors());


app.listen(port, function () {
    console.log('Making some pancakes on port:', port);
});

//
// var express = require('express');
// // var path = require('path');
// // var compression = require('compression');
//
// // import React from "react";
// import { renderToString } from 'react-dom/server';
// // import { match, RouterContext } from 'react-router';
// // import routes from './modules/routes';
//
// var app = express();
// // app.use(compression());
// app.use( express.static( path.join(__dirname, 'client') ));
// //
// // app.get('*', (req, res) => {
// //   match( { routes: routes, location: req.url }, (err, redirect, props) => {
// //
// //     if (err) {
// //       res.status( 500 ).send( err.message );
// //     } else if (redirect) {
// //       res.redirect( redirect.pathname + redirect.search )
// //
// //     } else if ( props ) {
// //       const appHtml = renderToString( <RouterContext {...props}/> )
// //       res.send( renderPage( appHtml ) );
// //
// //     } else {
// //       res.status(404).send('Not Found');
// //     }
// //   })
// // });
// //${appHtml}
// function renderPage(  ) {
//   return `
//     <!doctype html client="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>Something very whitty</title>
//     <link rel=stylesheet href=/index.css>
//     <div id=app></div>
//     <script src="/bundle.js"></script>
//    `
// }
//
// var PORT = process.env.NODE_ENV == "development"? 8080 : 80;
// app.listen( PORT, function() {
//   console.log( 'Production panda dancing at localhost:' + PORT )
// });
