var express = require('express');
var router = express.Router();



// ROUTER FOR BRANCHES 

router.get('/', function(req, res){
    Branch.getBranches(function(err, branches){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": branches, "success":true});
    });
});

router.get('/:_id', function(req, res){
    Branch.getBranchById(req.params._id, function(err, branch){
            if(err){
                res.json({"data":err.message, "success": false});
            }
            res.json({"data": branch, "success":true});
    });
});

router.post('/', function(req, res){
    var branch = req.body.branch;
    Branch.addBranch(branch, function(err, branch){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": branch, "success":true});
    });
});

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var branch = req.body.branch;
    
    Branch.updateBranch(id, branch, {}, function(err, branch){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": branch, "success":true});
    });
});

router.delete('/:_id', function(req, res){
    var id = req.params._id;
    
    Branch.deleteBranch(id, function(err){
        if(err)
            res.json({"data":err.message, "success": false});
        res.json({"success": true});
    });
})
module.exports = router;