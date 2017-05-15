var mongoose = require('mongoose');
var Staff = require('./staff');
var typeofwork_version_schema = mongoose.Schema({

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

var typeofwork_version = module.exports = mongoose.model('Typeofwork_version', typeofwork_version_schema);