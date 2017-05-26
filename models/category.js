var mongoose = require('mongoose');
var category_version = require('./category_version');
var Category_tag = require('./category_tag');

var category_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    remark: {
        type: String,
    },
    category_tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category_tag',
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
    versions: [category_version.schema]
});

var Category = module.exports = mongoose.model('Category', category_schema);

// Get Categories
module.exports.getCategories = function(callback, limit){
    Category.find({dis: true}, callback).limit(limit);
}

// Get Category by ID
module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
}

// Add Category
module.exports.addCategory = function(category, callback){
    var v = new category_version({
        name: category.name,
        remark: category.remark,
        category_tags: category.category_tags,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newCategory = new Category({
        name: category.name,
        remark: category.remark,
        category_tags: category.category_tags,
        versions: [v]
    });

    newCategory.save(callback);
}

// Update Category
module.exports.updateCategory = function(id, newCategory, options, callback){
    var query = {_id:id};
    var v = {
        name: newCategory.name,
        remark: newCategory.remark,
        category_tags: newCategory.category_tags,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    };
    delete newCategory['versions'];
    var update = {$set: newCategory, $push: {versions: v}};
    Category.update(query, update, options, callback);
}     

module.exports.deleteCategory = function(id, callback){
    var query = {_id:id};
    var v = new category_version({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    Category.update(query, update, callback);
}                                                                                                                                                                                                                                                                                      