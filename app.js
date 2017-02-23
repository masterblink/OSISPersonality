/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var express    = require('express'),
  app          = express(),
  watson       = require('watson-developer-cloud'),
  extend       = require('util')._extend,
  i18n         = require('i18next');


//i18n settings
require('./config/i18n')(app);

// Bootstrap application settings
require('./config/express')(app);

var db = require('./db');

// Create the service wrapper
var personalityInsights = watson.personality_insights({
  version: 'v2',
  username: '<username>',
  password: '<password>'
});

var mongo = process.env.VCAP_SERVICES;
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
var conn_str = "";
if (mongo) {
    var env = JSON.parse(mongo);
    if (env['mongodb']) {
        mongo = env['mongodb'][0]['credentials'];
        if (mongo.url) {
            conn_str = mongo.url;
        } else {
            console.log("No mongo found");
        }
    } else {
        conn_str = 'mongodb://localhost:27017';
    }
} else {
    conn_str = 'mongodb://localhost:27017';
}

app.get('/', function(req, res) {
    res.render('index', { ct: req._csrfToken });
});

app.get('/contactenos', function(req, res) {

    res.render('contactenos', { ct: req._csrfToken });
});

app.post('/quotes', function(req, res) {
    console.log(req.body);

    db.get().collection('contactenos').save(req.body, function(err, result) {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/contactenos')
    });
    /*db.collection('quotes').save(req.body, function(err, result) {
     if (err) return console.log(err);

     console.log('saved to database');
     res.redirect('/contactenos')
     })*/
});

//app.use('/contactenos', require('./controllers/contactenos'));

db.connect(conn_str, function(err) {
    if (err) {
        console.log(conn_str + ' Unable to connect to Mongo.');
        process.exit(1)
    } else {
        /*app.listen(3000, function() {
            console.log('Listening on port 3000...')
        })*/
    }
});









app.post('/api/profile', function(req, res, next) {
  var parameters = extend(req.body, { acceptLanguage : i18n.lng() });

  personalityInsights.profile(parameters, function(err, profile) {
    if (err)
      return next(err);
    else
      return res.json(profile);
  });
});

// error-handler settings
require('./config/error-handler')(app);


app.listen(port);
console.log('listening at:', port);
