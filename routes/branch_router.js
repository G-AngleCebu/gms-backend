var express = require('express');
var router = express.Router();



// ROUTER FOR BRANCHES 

router.get('/', function(req, res){
    Branch.getBranches(function(err, branches){
        if(err){
            throw err;
        }
        res.json({"data": branches});
    });
});

router.get('/:_id', function(req, res){
    Branch.getBranchById(req.params._id, function(err, branch){
            if(err){
                throw err;
            }
            res.json({"data": branch});
    });
});

router.post('/', function(req, res){
    var branch = req.body;
    Branch.addBranch(branch, function(err, branch){
        if(err){
            throw err;
        }
        res.json({"data": branch});
    });
});

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var branch = req.body;
    
    Branch.updateBranch(id, branch, {}, function(err, branch){
        if(err){
            throw err;
        }
        res.json({"data": branch});
    });
});

module.exports = router;