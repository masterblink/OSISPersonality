/**
 * Created by Administrador on 22/02/2017.
 */
var db = require('../db')

exports.all = function(cb) {
    var collection = db.get().collection('contactenos')

    collection.find().toArray(function(err, docs) {
        cb(err, docs)
    })
}

exports.recent = function(cb) {
    var collection = db.get().collection('contactenos')

    collection.find().sort({'date': -1}).limit(100).toArray(function(err, docs) {
        cb(err, docs)
    })
}
