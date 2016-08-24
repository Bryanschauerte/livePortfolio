import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import fs from 'fs'
import {
  createPage,
  write,
  writeError,
  writeNotFound,
  redirect } from './utilities/serverUtils'

import routes from './routes/RootRoute'
const PORT = process.env.PORT || 8080



function renderApp(props, res) {

  const markup = renderToString(<RouterContext {...props}/>)
  const html = createPage(markup)
  write(html, 'text/html', res)
}

http.createServer(( req, res ) => {
  if ( /__build__/.test(req.url) ) {

    fs.readFile(`.${req.url}`, (err, data) => {
      write(data, 'text/javascript', res)
    })

  }
  else {
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
  }

}).listen(PORT)
console.log(`listening on port ${PORT}`)
