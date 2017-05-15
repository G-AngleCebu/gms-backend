var express = require('express');
var router = express.Router();


// ROUTER FOR ASSIGNMENTS

router.get('/', function(req,res){
    Assignment.getAssignments(function(err, assignments){
        if(err){
            throw err;
        }
        res.json({"data": assignments});
    })
})

router.get('/:_id', function(req, res){
    Assignment.getAssignmentById(req.params._id, function(err, assignment){
        if(err){
            throw err;
        }
        res.json({"data": assignment});
    });
})

router.post('/', function(req, res){
    var assignment = req.body;
    Assignment.addAssignment(assignment, function(err, assignment){
        if(err){
            throw err;
        }
        res.json({"data" : assignment});
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

module.exports = router;