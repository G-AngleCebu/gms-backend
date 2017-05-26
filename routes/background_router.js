var express = require('express');
var router = express.Router();

// ROUTER FOR BACKGROUNDS

router.get('/', function(req, res){
    Background.getBackgrounds(function(err, backgrounds){
        if(err)
            res.json({"data":err.message, "success": false});
        res.json({"data":backgrounds, "success":true});
    });
})

router.get('/:_id', function(req, res){
    Background.getBackgroundById(req.params._id, function(err, background){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": branch, "success":true});
    });
})

router.post('/', function(req, res){
    var background = req.body;
    Background.addBackground(background, function(err, background){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":background, "success":true});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var assignment = req.body;

    Assignment.updateAssignment(id, assignment, {}, function(err, assignment){
        if(err){
            res.json({"data":err.message, "success": false});
        }

        res.json({"data": assignment, "success":true});
    })
})

module.exports =router

