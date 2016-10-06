'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _serverUtils = require('./utilities/serverUtils');

var _RootRoute = require('./routes/RootRoute');

var _RootRoute2 = _interopRequireDefault(_RootRoute);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _hidden = require('../keys/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _users = require('../keys/users');

var _users2 = _interopRequireDefault(_users);

var _secret = require('../keys/secret');

var _secret2 = _interopRequireDefault(_secret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');

var session = require('cookie-session');
var cookieParser = require('cookie-Parser');
var helmet = require('helmet');
var expressJWT = require('express-jwt');
var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');

var expiryDate = new Date(Date.now() + 60 * 60 * 1000);

var app = (0, _express2.default)();
app.use(helmet());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json({ type: 'application/json' }));

app.use(_express2.default.static(__dirname + '/__build__/'));

var PORT = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
var db = void 0;

MongoClient.connect(_hidden2.default, function (err, database) {

  db = database;
  app.listen(PORT, function () {
    console.log('listening on ' + PORT);
  });
});

var requestHandling = {
  getToken: function getToken(req, res, next) {},
  newContent: function newContent(req, res) {

    var date = new Date();
    req.body.dateCreated = date;
    var _id = _mongodb2.default.ObjectId();
    req.body._id = _id;
    db.collection('contents').save(req.body, function (err, result) {
      if (err) return res.send(err);
      res.send(result);
    });
  },

  updateContent: function updateContent(req, res) {

    var targetID = req.body._id;
    var content = req.body.contentItems;

    db.collection('contents').update({ '_id': _mongodb2.default.ObjectId(targetID) }, { $set: { 'contentItems': content } }, { upsert: true }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },

  deleteContent: function deleteContent(req, res) {

    var targetID = req.body._id;
    console.log('deleting ' + targetID);
    db.collection('contents', function (err, collection) {
      collection.remove({ '_id': _mongodb2.default.ObjectId(targetID) }, { safe: true }, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(collection);
        }
      });
    });
  }
};

//handling contenttargetID
app.post('/maincontents', expressJWT({ secret: _secret2.default }), requestHandling.newContent);
app.put('/maincontents', expressJWT({ secret: _secret2.default }), requestHandling.updateContent);
app.delete('/maincontents', expressJWT({ secret: _secret2.default }), requestHandling.deleteContent);

//users

app.post('/login', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Missing info!');
  }

  if (_users2.default[req.body.username]) {
    if (_users2.default[req.body.username].password == _users2.default[req.body.username].password) {
      var token = jwt.sign(_users2.default[req.body.username], _secret2.default);
      return res.status(200).json({ token: token, admin: _users2.default[req.body.username].admin });
    }
  } else {
    return res.status(400).send('incorrect info!');
  }
});

app.get('*', function (req, res) {
  if (req.url) {

    if (req.url == '/maincontents') {

      db.collection('contents').find().toArray(function (err, results) {
        if (err) {
          console.log(err);
          return res.sendStatus(404);
        }

        if (results) {
          return res.send(results);
        }

        res.send('Nothing in DB').sendStatus(200);
      });
    } else {
      (0, _reactRouter.match)({ routes: _RootRoute2.default, location: req.url }, function (error, redirectLocation, renderProps) {

        if (error) (0, _serverUtils.writeError)('ERROR!', res);else if (redirectLocation) (0, _serverUtils.redirect)(redirectLocation, res);else if (renderProps) renderApp(renderProps, res);else (0, _serverUtils.writeNotFound)(res);
      });
    }
  }
});

function renderApp(props, res) {

  var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
  var html = (0, _serverUtils.createPage)(markup);
  res.status(200);
  res.send(html);
}

//
// app.post('/auth/getToken/', (req, res) => {
//     if (req.body.email == 'hello@test.com' && req.body.password == 'test') {
//         res.status(200)
//             .json({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRlc3QgVXNlciJ9.J6n4-v0I85zk9MkxBHroZ9ZPZEES-IKeul9ozxYnoZ8'});
//     } else {
//         res.sendStatus(403);
//     }
// });
//
// app.get('/getData/', (req, res) => {
//     let token = req.headers['authorization'];
//     if (!token) {
//         res.sendStatus(401);
//     } else {
//         try {
//             let decoded = jwt.verify(token.replace('Bearer ', ''), 'secret-key');
//             res.status(200)
//                 .json({data: 'Valid JWT found! This protected data was fetched from the server.'});
//         } catch (e) {
//             res.sendStatus(401);
//         }
//     }
// })
//
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/dist/index.html');
// });