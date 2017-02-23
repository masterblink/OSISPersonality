
var express = require('express')
    , router = express.Router(),
    app = express();

var Contactenos = require('../models/contactenos');

router.post('/quotes', function(req, res) {
    console.log(req.body);
    /*db.collection('quotes').save(req.body, function(err, result) {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/contactenos')
    })*/
});



/*router.get('/all', function(req, res) {
    Contactenos.all(function(err, docs) {
        res.render('contactenos', {comments: docs})
    })
});

router.get('/recent', function(req, res) {
    Contactenos.recent(function(err, docs) {
        res.render('contactenos', {comments: docs})
    })
});*/
module.exports = router;