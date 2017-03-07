var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://admin:admin@ds145379.mlab.com:45379/meantodos',['todos']);

db.on('error', function (err) {
    console.log('Connection errored', err);
});

router.get('/todos', function(req,res,next){
    db.todos.find(function(err,todos) {
        if(err){
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

module.exports = router;