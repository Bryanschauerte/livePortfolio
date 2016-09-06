import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import axios from "axios";
var path = require('path');
import fs from 'fs'
import {
  createPage,
  write,
  writeError,
  writeNotFound,
  redirect } from './utilities/serverUtils';
// import requestHandling from './utlities/requestHandling'
import routes from './routes/RootRoute';
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import mongodb from 'mongodb';
import mongoLABSURLINFO from '../keys/hidden'
// import requestHandling from './utilities/requestHandling'


let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static(__dirname + '/__build__/'));

const PORT = process.env.PORT || 8080;
const MongoClient = require('mongodb').MongoClient
let db;

MongoClient.connect(mongoLABSURLINFO, (err, database) => {

  db= database
  app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})
})


const requestHandling = {

  newContent: (req, res) => {

    let date = new Date();
    req.body.dateCreated = date;
    console.log(req.body, "request hit")

    db.collection('contents').save(req.body, (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    })
  },

  updateContent: (req, res) => {

  let targetTitle = req.body.title;
  let content = req.body;

    db.collection('contents', (err, collection) => {
            collection.update(
              {'title': targetTitle}, content, {safe:true}, (err, result)=>{
                if (err) {
                    console.log('Error updating content: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(content);
                }
            });
        });

  },

  deleteContent: (req,res)=>{
    let targetTitle = req.body.title;

      console.log('deleting '+ targetTitle)
      db.collection('contents', (err, collection)=>{
        collection.remove({'title': targetTitle}, {safe:true}, (err, result)=>{
          if(err) {
            res.send(err)
        }else{
          res.send(collection)
        }

        })
      })
  }
};




//handling content
app.post('/maincontents', requestHandling.newContent);
app.put('/maincontents', requestHandling.updateContent);
app.delete('/maincontents', requestHandling.deleteContent);




//route handling
app.get('*', (req, res) => {
    if(req.url){

        if(req.url == '/maincontents'){

          db.collection('contents').find().toArray(function(err, results) {
              if (err) {
                 console.log(err)
                 return res.send(err).sendStatus(404);
              }

              if(results) {
                return res.send(contents).sendStatus(200);
              }


              res.send('Nothing in DB').sendStatus(200);
            })

        }else {
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
      }
});

function renderApp(props, res) {

  const markup = renderToString(<RouterContext {...props}/>);
  const html = createPage(markup);
  res.status(200)
  res.send(html)

}
