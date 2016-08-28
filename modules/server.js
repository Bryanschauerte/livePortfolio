import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
var path = require('path');
import fs from 'fs'
import {
  createPage,
  write,
  writeError,
  writeNotFound,
  redirect } from './utilities/serverUtils';
import routes from './routes/RootRoute';
import express from 'express'
// var sass    = require('node-sass-endpoint');
var app     = express();
//
// app.get('/app.css',
//   sass.serve('./styles/app.scss'));

app.use(express.static(__dirname + '/__build__'));

app.get('*', function(req, res){
console.log(req.url)
console.log(path, "path")
// if(req.url == "/__build__/main.js" || "/styling/style.css"){
//   console.log('req of static');
//   res.status(200).sendFile(path.resolve(__dirname, '..'+req.url))
// }
  match(
    { routes, location: req.url },
     (error, redirectLocation, renderProps) => {

    if (error)
      writeError('ERROR!', res)
    else if (redirectLocation)
      redirect(redirectLocation, res)
    else if (renderProps)

      renderApp(renderProps, res)
    else
      writeNotFound(res)
  })
});


const PORT = process.env.PORT || 8080



function renderApp(props, res) {

  const markup = renderToString(<RouterContext {...props}/>);
  const html = createPage(markup);
  res.status(200)
  res.send(html)
  // write(html, 'text/html', res);
}
//
// http.createServer(( req, res ) => {
//   console.log(req.url, "request url");
//   // if(req.url = "./__build__/main.css")
//   if ( /__build__/.test(req.url) ) {
//
//     fs.readFile(`.${req.url}`, (err, data) => {
//       write(data, 'text/javascript', res)
//     })
//
//   }
//   else {
//     match(
//       { routes, location: req.url },
//        (error, redirectLocation, renderProps) => {
//
//       if (error)
//         writeError('ERROR!', res)
//       else if (redirectLocation)
//         redirect(redirectLocation, res)
//       else if (renderProps)
//
//         renderApp(renderProps, res)
//       else
//         writeNotFound(res)
//     })
//   }
//
// }).listen(PORT)
app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})
// console.log(`listening on port ${PORT}`)
