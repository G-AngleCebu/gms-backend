var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next){
    console.log("Time: ", Date.now());
    next();
});

// ROUTER FOR STAFF

router.get('/', function(req, res){
    Staff.getStaffs(function(err, staffs){
        if(err){
            throw err;
        }
        res.json({'data': staffs});
    });
})

router.get('/:_id', function(req, res){
    Staff.getStaffById(req.params._id, function(err, staff){
            if(err){
                throw err;
            }
            res.json({'data': staff});
    });
})

router.post('/', function(req, res){
    var staff = req.body.employee;
    console.log(staff);
    // console.log(staff.employee);
    Staff.addStaff(staff, function(err, staff){
        if(err){
            throw err;
        }
        res.json({"data":staff});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var staff = req.body;
    
    Staff.updateStaff(id, staff, {}, function(err, staff){
        if(err){
            throw err;
        }
        res.json({"data":staff});
    });
})

router.delete('/:_id', function(req, res){
    var id = req.params._id;

    Staff.deleteStaff(id, function(err){
        if(err)
            throw err;
        res.json("Success!");
    })
})

module.exports = router;