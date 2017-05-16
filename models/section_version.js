var mongoose = require('mongoose');
var Staff = require('./staff');

var section_version_schema = mongoose.Schema({
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

var section_version = module.exports = mongoose.model('Section_version', section_version_schema);
