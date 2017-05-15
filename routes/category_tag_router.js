var express = require('express');
var router = express.Router();

// ROUTER FOR CATEGORY TAGS

router.get('/', function(req, res){
    Category_tag.getCategoryTags(function(err, category_tags){
            if(err){
                throw err;
            }
            res.json(category_tags);
    });
});

router.get('/:_id', function(req, res){
    Category_tag.getCategoryTagById(req.params._id, function(err, category_tag){
            if(err){
                throw err;
            }
            res.json(category_tag);
    });
});

router.post('/', function(req, res){
    var category_tag = req.body;
    Category_tag.addCategoryTag(category_tag, function(err, category_tag){
        if(err){
            throw err;
        }
        res.json(category_tag);
    });
});

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var category_tag = req.body;
    
    Category_tag.updateCategoryTag(id, category_tag, {}, function(err, category_tag){
        if(err){
            throw err;
        }
        res.json(category_tag);
    });
});

module.exports = router;