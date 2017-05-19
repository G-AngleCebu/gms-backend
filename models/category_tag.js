var mongoose = require('mongoose');
var category_tag_version = require('./category_tag_version');
var Category = require('./category');

var category_tag_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    remark: {
        type: String
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    }],
    reg: {
        type: Date,
        default: Date.now
    },
    dis: {
        type: Boolean,
        default: true
    },
    versions: [category_tag_version.schema]
});

var Category_tag = module.exports = mongoose.model('Category_tag', category_tag_schema);

// Get Category Tags
module.exports.getCategoryTags = function(callback, limit){
    Category_tag.find({dis: true}, callback).limit(limit);
}

// Get Category Tag by ID
module.exports.getCategoryTagById = function(id, callback){
    Category_tag.findById(id, callback);
}

// Add Category Tag
module.exports.addCategoryTag = function(category_tag, callback){
    var v = new category_tag_version({
        name: category_tag.name,
        remark: category_tag.remark,
        categories: category_tag.categories,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newCategoryTag = new Category_tag({
        name: category_tag.name,
        remark: category_tag.remark,
        categories: category_tag.categories,
        versions: [v]
    });

    newCategoryTag.save(callback);
}

// Update Category Tag
module.exports.updateCategoryTag = function(id, newCategoryTag, options, callback){
    var query = {_id:id};
    var v = {
        name: newCategoryTag.name,
        remark: newCategoryTag.remark,
        categories: newCategoryTag.categories,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    };
    var update = {$set: newCategoryTag, $push: {versions: v}};
    Category_tag.update(query, update, options, callback);
}

module.exports.deleteCategoryTag = function(id, callback){
    var query = {_id:id};
    var v = new category_tag_version({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    Category_tag.update(query, update, callback);
}