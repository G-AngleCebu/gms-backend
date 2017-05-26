var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('API HOME PAGE');
});

// ROUTER FOR CURRENT STATUS

router.get('/', function(req, res){
    CurrentStatus.getCurrentStatuses(function(err, currentStatus){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":currentStatus, "success":true});
    });
})

router.get('/:_id', function(req, res){
    CurrentStatus.getCurrentStatusById(req.params._id, function(err, currentStatus){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":currentStatus, "success":true});
    });
})

router.post('/', function(req, res){
    var cur = req.body;
    CurrentStatus.addCurrentStatus(cur, function(err, cur){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":cur, "success":true});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var cur = req.body;
    CurrentStatus.updateCurrentStatus(id, cur, {}, function(err, cur){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": cur, "success":true});
    });
})

module.exports = router;