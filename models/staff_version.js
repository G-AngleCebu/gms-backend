var mongoose = require('mongoose');
var Staff = require('./staff');
var section = require('./section')
var Branch = require('./branch');
var Department = require('./department');
var Position = require('./position');
var staff_version_schema = mongoose.Schema({
    name: {
        type: String,
    },
    birth: {
        type: Date,
    },
    gender: {
        type: String
    },
    blood: {
        type: String
    },
    post_1: {
        type: String,
    },
    address_1: {
        type: String,
    },
    post_2: {
        type: String,
    },
    address_2: {
        type: String,
    },
    phone_home: {
        type: String
    },
    phone_mobile: {
        type: String
    },
    phone_emergency: {
        type: String
    },
    email_mobile: {
        type: String
    },
    email_pc: {
        type: String,
    },
    commuting_route: {
        type: String
    },
    commuting_time: {
        type: Number
    },
    transportation_cost_one_time: {
        type: Number
    },
    transportation_cost_1m: {
        type: Number
    },
    transportation_cost_6m: {
        type: Number
    },
    joined_date: {
        type: Date,
        default: Date.now
    },
    leave_date: {
        type: Date
    },
    permit_level: {
        type: Number,
    },
    password: {
        type: Number,
        required: true
    },
    hourly_wage: {
        type: Number,
    },
    profile_picture: {
        type: String,
    },
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: false
    }],
    branches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: false
    }],
    positions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position',
        required: false
    }],
    departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: false
    }],
    time_changed: {
        type: Date,
        default: Date.now,
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

var staff_version = module.exports = mongoose.model('Staff_version', staff_version_schema);


