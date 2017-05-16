var mongoose = require('mongoose');
var Staff = require('./staff');

var current_status_version = mongoose.Schema({
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

var CurrentStatus_version = module.exports = mongoose.model('CurrentStatus_version', current_status_version);
