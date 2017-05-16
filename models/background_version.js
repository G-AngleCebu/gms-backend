var mongoose = require('mongoose');
var Staff = require('./staff');

var background_version_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    remark: {
        type: String,
    },
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

var Background_version = module.exports = mongoose.model('Background_version', background_version_schema);