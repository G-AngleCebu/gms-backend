var express = require('express');
var router = express.Router();


// ROUTER FOR ASSIGNMENTS

router.get('/', function(req,res){
    Assignment.getAssignments(function(err, assignments){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": assignments, "success":true});
    })
})

router.get('/:_id', function(req, res){
    Assignment.getAssignmentById(req.params._id, function(err, assignment){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": assignment, "success":true});
    });
})

router.post('/', function(req, res){
    var assignment = req.body;
    Assignment.addAssignment(assignment, function(err, assignment){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data" : assignment, "success":true});
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

module.exports = router;