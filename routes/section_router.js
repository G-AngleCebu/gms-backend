var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('API HOME PAGE');
});

// ROUTER FOR SECTIONS

router.get('/', function(req, res){
    Section.getSections(function(err, sections){
        if(err){
            throw err;
        }
        res.json({"data":sections});
    });
});

router.get('/:_id', function(req, res){
    Section.getSectionById(req.params._id, function(err, section){
        if(err){
            throw err;
        }
        res.json(section);
    });
})

router.post('/', function(req, res){
    var section = req.body;
    Section.addSection(section, function(err, section){
        if(err){
            throw err;
        }
        res.json(section);
    });
    
})

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var section = req.body;
    Section.updateSection(id, section, {}, function(err, section){
        if(err){
            throw err;
        }
        res.json({"data":section});
    });
})


module.exports = router;