var express = require('express');
var router = express.Router();


// ROUTER FOR POSITIONS

router.get('/', function(req, res){
    Position.getPositions(function(err, positions){
        if(err){
            throw err;
        }
        res.json({"data":positions});
    });
});

router.post('/', function(req, res){
    var position = req.body;
    Position.addPosition(position, function(err, position){
        if(err){
            throw err;
        }
        res.json({"data":position});
    });
});

router.get('/:_id', function(req, res){
    Position.getPositionById(req.params._id, function(err, position){
            if(err){
                throw err;
            }
            res.json({"data":position});
    });
});

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var position = req.body;
    
    Position.updatePosition(id, position, {}, function(err, position){
        if(err){
            throw err;
        }
        res.json({"data":position});
    });
});

module.exports = router;