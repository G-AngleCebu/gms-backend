var express = require('express');
var router = express.Router();


// ROUTER FOR DEPARTMENT

router.get('/', function(req, res){
    Department.getDepartments(function(err, departments){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":departments, "success":true});
    });
})

router.get('/:_id', function(req, res){
    Department.getDepartmentById(req.params._id, function(err, department){
            if(err){
                res.json({"data":err.message, "success": false});
            }
            res.json({"data":department, "success":true});
    });
})

router.post('/', function(req, res){
    var department = req.body.department;
    Department.addDepartment(department, function(err, department){
        console.log(res);
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":department, "success":true});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var department = req.body.department;
    Department.updateDepartment(id, department, {}, function(err, department){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":department, "success":true});
    });
})

module.exports = router;