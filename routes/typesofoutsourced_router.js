var express = require('express');
var router = express.Router();

// ROUTER FOR TYPES OF OUTSOURCED

router.get('/', function(req, res){
    TypeOfOutsourced.getTypesOfOutsourced(function(err, types){
        if(err)
            throw err;
        res.json({"data":types})
    });    
});

router.get('/:_id', function(req, res){
    TypeOfOutsourced.getTypeOfOutsourcedById(req.params._id, function(err, type){
        if(err)
            throw err;
        res.json({"data": type});
    });
});

router.post('/', function(req, res){
    var typeofoutsourced = req.body;
    TypeOfOutsourced.addTypeOfOutsourced(typeofoutsourced, function(err, typeofoutsourced){
        if(err){
            throw err;
        }
        res.json({"data":typeofoutsourced});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var typeofoutsourced = req.body;

    TypeOfOutsourced.updateTypeOfOutsourced(id, typeofoutsourced, {}, function(err, typeofoutsourced){
        if(err){
            throw err;
        }
        res.json({"data": typeofoutsourced});
    })
})

module.exports =router
