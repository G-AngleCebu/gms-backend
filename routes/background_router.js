var express = require('express');
var router = express.Router();

// ROUTER FOR BACKGROUNDS

router.get('/', function(req, res){
    Background.getBackgrounds(function(err, backgrounds){
        if(err)
            throw err;
        res.json({"data":backgrounds});
    });
})

router.get('/:_id', function(req, res){
    Background.getBackgroundById(req.params._id, function(err, background){
        if(err){
            throw err;
        }
        res.json({"data": branch});
    });
})

router.post('/', function(req, res){
    var background = req.body;
    Background.addBackground(background, function(err, background){
        if(err){
            throw err;
        }
        res.json({"data":background});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var assignment = req.body;

    Assignment.updateAssignment(id, assignment, {}, function(err, assignment){
        if(err){
            throw err;
        }
        res.json({"data": assignment});
    })
})

module.exports =router

