var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

router.use(function timeLog(req, res, next){
    console.log("Time: ", Date.now());
    next();
});

// ROUTER FOR STAFF

router.get('/', function(req, res){
    Staff.getStaffs(function(err, staffs){
        if(err){
            res.json({"data":err.message, "success": false});            
        }
        res.json({'data': staffs, "success":true});
    });
})

router.get('/:_id', function(req, res){
    var id = req.params._id;
    if(ObjectId.isValid(id)){
        Staff.getStaffById(id, function(err, staff){
            if(err){
                console.log(err);
                res.json({"data":null, "success": false, "message":err.message});                
            }
                res.json({'data': staff});
        });
    }else{
        res.json({"data":null})
    }
    
});

router.post('/', function(req, res){
    var staff = req.body.employee;
    Staff.addStaff(staff, function(err, staff){
        if(err){
            console.log(err);
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":staff, "success":true});
    });    
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var staff = req.body.employee;
    
    Staff.updateStaff(id, staff, {}, function(err, staff){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":staff, "success":true});
    });
})

router.delete('/:_id', function(req, res){
    var id = req.params._id;

    Staff.deleteStaff(id, function(err){
        if(err)
            res.json({"data":err.message, "success": false});
            
        res.json({"success": true});
    })
})

module.exports = router;