var mongoose = require('mongoose');
var Staff = require('./staff');

var dept_version_schema = mongoose.Schema({
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
    }
});

var dept_version = module.exports = mongoose.model('Dept_version', dept_version_schema);
