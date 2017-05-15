var express = require('express');
var router = express.Router();


// ROUTER FOR DEPARTMENT

router.get('/', function(req, res){
    Department.getDepartments(function(err, departments){
        if(err){
            throw err;
        }
        res.json({"data":departments});
    });
})

router.get('/:_id', function(req, res){
    Department.getDepartmentById(req.params._id, function(err, department){
            if(err){
                throw err;
            }
            res.json({"data":department});
    });
})

router.post('/', function(req, res){
    var department = req.body;
    Department.addDepartment(department, function(err, department){
        if(err){
            throw err;
        }
        res.json(department);
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var department = req.body;
    Department.updateDepartment(id, department, {}, function(err, department){
        if(err){
            throw err;
        }
        res.json(department);
    });
})

module.exports = router;