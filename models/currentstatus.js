var mongoose = require('mongoose');
var current_status_v = require('./currentstatus_version');

var current_status = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    remark: {
        type: String,
    },
    reg: {
        type: Date,
        default: Date.now
    },
    dis: {
        type: Boolean,
        default: true
    },
    versions: [current_status_v.schema]
});

var CurrentStatus = module.exports = mongoose.model('CurrentStatus', current_status);

// Get all Current Status
module.exports.getCurrentStatuses = function(callback, limit){
    CurrentStatus.find({dis: true}, callback).limit(limit);
}

// Get Current Status by ID
module.exports.getCurrentStatusById = function(id, callback){
    CurrentStatus.findById(id, callback);
}

// Add Current Status
module.exports.addCurrentStatus = function(currentStatus, callback){
    var v = new current_status_v({
        name: currentStatus.name,
        remark: currentStatus.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    })
    var newCurrentStatus = new CurrentStatus({
        name: currentStatus.name,
        remark: currentStatus.remark,
        versions: [v]
    });

    newCurrentStatus.save(callback);
}

// Update Current Status
module.exports.updateCurrentStatus = function(id, newCurrentStatus, options, callback){
    var query = {_id:id};
    var v = {
        name: newCurrentStatus.name,
        remark: newCurrentStatus.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    }
    delete newCurrentStatus['versions'];

    var update = {$set: newCurrentStatus, $push: {versions: v}};
    CurrentStatus.update(query, update, options, callback);
}

module.exports.deleteCurrentStatus = function(id, callback){
    var query = {_id:id};
    var v = new current_status_v({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    CurrentStatus.update(query, update, callback);
}