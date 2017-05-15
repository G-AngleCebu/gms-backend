var mongoose = require('mongoose');
var Staff = require('./staff');

var outsourced_schema_v = mongoose.Schema({
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

var TypeOfOutsourced_version = module.exports = mongoose.model('TypeOfOutsourced_version', outsourced_schema_v);

