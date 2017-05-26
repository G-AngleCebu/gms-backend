var express = require('express');
var router = express.Router();

// ROUTER FOR TYPES OF WORK

router.get('/', function(res, req){
    TypeOfWork.getTypesOfWork(function(err, types){
        if(err)
            res.json({"data":err.message, "success": false});

        res.json({"data": types, "success":true});
    });
})

router.get('/:_id', function(req, res){
    TypeOfWork.getTypeOfWorkById(req.params._id, function(err,type){
        if(err)
            res.json({"data":err.message, "success": false});

        res.json({"data": type, "success":true});
    });
})

router.post('/', function(req, res){
    var typeofwork = req.body;
    TypeOfWork.addTypeOfWork(typeofwork, function(err, typeofwork){
        if(err)
            res.json({"data":err.message, "success": false});

        res.json({"data": typeofwork, "success":true});
    });
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var typeofwork = req.body;

    TypeOfWork.updateTypeOfWork(id, typeofwork, {}, function(err, typeofwork){
        if(err)
            res.json({"data":err.message, "success": false});

        res.json({"data": typeofwork, "success":true});
    });
})

module.exports = router;