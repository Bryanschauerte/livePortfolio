import http from 'http'
import React from 'react'
import AsyncProps, { loadPropsOnServer } from 'async-props';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import axios from "axios";
let path = require('path');
import fs from 'fs'
import {
  createPage,
  write,
  writeError,
  writeNotFound,
  redirect } from './serverUtils';

import routes from './routes/RootRoute';
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import mongodb from 'mongodb';
import mongoLABSURLINFO from '../keys/hidden';
const session = require('cookie-session');
const cookieParser = require('cookie-Parser')
const helmet = require('helmet');
const expressJWT = require('express-jwt');
var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt-nodejs';
import users from '../keys/users';
import secret from '../keys/secret';
const request = require('./utilities/requestHandling');
const expiryDate = new Date( Date.now() + 60 * 60 * 1000 );

let app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }))

app.use(express.static(__dirname + '/__build__'));

const PORT = process.env.PORT || 8080;
const MongoClient = require('mongodb').MongoClient
let db;

MongoClient.connect(mongoLABSURLINFO, (err, database) => {

  db= database
  app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})
})


const requestHandling = {
  getToken: (req,res, next) =>{

  },
  newContent: (req, res) => {

    let date = new Date();
    req.body.dateCreated = date;
    let _id = mongodb.ObjectId()
    req.body._id = _id;
    db.collection('contents').save(req.body, (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    })
  },

  updateContent: (req, res) => {

  let targetID = req.body._id;
  let content = req.body.contentItems;

    db.collection('contents').update(
      {'_id': mongodb.ObjectId(targetID)},
      {$set: {'contentItems':content}},
      { upsert: true }, (err, result)=>{
      if(err){
        console.log(err)
      }else{
        res.send(result)
      }
    } );

  },

  deleteContent: (req,res)=>{

      let targetID = req.body._id;
      console.log('deleting '+ targetID)
      db.collection('contents', (err, collection)=>{
        collection.remove({'_id': mongodb.ObjectId(targetID)}, {safe:true}, (err, result)=>{
          if(err) {
            res.send(err)
        }else{
          res.send(collection)
        }

        })
      })
  }
};


//handling contenttargetID
app.post('/maincontents', expressJWT({secret}), requestHandling.newContent);
app.put('/maincontents',  expressJWT({secret}), requestHandling.updateContent);
app.delete('/maincontents',  expressJWT({secret}), requestHandling.deleteContent);

//users

app.post('/login', function(req,res){
  if(!req.body.username || !req.body.password){
    res.status(400).send('Missing info!')
  }

    if(users[req.body.username]){
      if(users[req.body.username].password == users[req.body.username].password){
        let token = jwt.sign(users[req.body.username], secret)
        return res.status(200).json({token:token, admin:users[req.body.username].admin});
      }
    }else{
      return res.status(400).send('incorrect info!');
    }

})


app.get('*', (req, res) => {
    if(req.url){

        if(req.url == '/maincontents'){

          db.collection('contents').find().toArray(function(err, results) {
              if (err) {
                 console.log(err)
                 return res.sendStatus(404);
              }

              if(results) {
                return res.send(results);
              }


              res.send('Nothing in DB').sendStatus(200);
            })

        }else {
          match(
            { routes, location: req.url },
             (error, redirectLocation, renderProps) => {

            if (error){

                writeError('ERROR!', res)
            }

            else if (redirectLocation){

                redirect(redirectLocation, res)
            }

            else if (renderProps){

                            renderApp(renderProps, res)
            }

            else{

                writeNotFound(res)
            }

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
