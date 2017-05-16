var mongoose = require('mongoose');
var Staff = require('./staff');

var position_version_schema = mongoose.Schema({
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

var position_version = module.exports = mongoose.model('Position_version', position_version_schema);