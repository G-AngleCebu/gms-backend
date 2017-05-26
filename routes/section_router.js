var express = require('express');
var router = express.Router();

// ROUTER FOR SECTIONS

router.get('/', function(req, res){
    Section.getSections(function(err, sections){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":sections, "success":true});
    });
});

router.get('/:_id', function(req, res){
    Section.getSectionById(req.params._id, function(err, section){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":section, "success":true});
    });
})

router.post('/', function(req, res){
    var section = req.body.section;
    Section.addSection(section, function(err, section){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": section, "success":true});
    });
    
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var section = req.body.section;
    Section.updateSection(id, section, {}, function(err, section){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":section, "success":true});
    });
})


module.exports = router;