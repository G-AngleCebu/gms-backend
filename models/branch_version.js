var mongoose = require('mongoose');
var Staff = require('./staff');

var branch_version_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
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

var branch_version = module.exports = mongoose.model('Branch_version', branch_version_schema);