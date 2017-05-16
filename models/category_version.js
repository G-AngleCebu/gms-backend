var mongoose = require('mongoose');
var Staff = require('./staff');

var category_version_schema = mongoose.Schema({
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

var category_version = module.exports = mongoose.model('Category_version', category_version_schema);
