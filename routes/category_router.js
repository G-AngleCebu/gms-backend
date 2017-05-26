var express = require('express');
var router = express.Router();


// ROUTER FOR CATEGORIES

router.get('/', function(req, res){
    Category.getCategories(function(err, categories){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data":categories, "success":true});
    });
});

router.get('/:_id', function(req, res){
    Category.getCategoryById(req.params._id, function(err, category){
            if(err){
                res.json({"data":err.message, "success": false});
            }
            res.json({"data": category, "success":true});
    });
});

router.post('/', function(req, res){
    var category = req.body;
    Category.addCategory(category, function(err, category){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": category, "success":true});
    });
});

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var category = req.body;
    
    Category.updateCategory(id, category, {}, function(err, category){
        if(err){
            res.json({"data":err.message, "success": false});
        }
        res.json({"data": category, "success":true});
    });
});

module.exports = router;