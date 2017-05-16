var mongoose = require('mongoose');
var Staff = require('./staff');
var Category = require('./category');

var category_tag_version_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    remark: {
        type: String,
    }, 
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    }],
    time_changed: {
        type: Date,
        default: Date.now
    },
    staff_maker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    dis: {
        type: Boolean,
        default: true
    }
});

var category_tag_version = module.exports = mongoose.model('Category_tag_version', category_tag_version_schema);
