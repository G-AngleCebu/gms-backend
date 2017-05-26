var mongoose = require('mongoose');
var assignment_v = require('./assignment_version');

var assignment_schema = mongoose.Schema({
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
    versions: [assignment_v.schema]
});

var Assignment = module.exports = mongoose.model('Assignment', assignment_schema);

// Get Assignments
module.exports.getAssignments = function(callback, limit){
    Assignment.find({dis: true}, callback).limit(limit);
}

// Get Assignment by ID
module.exports.getAssignmentById = function(id, callback){
    Assignment.findById(id, callback);
}

// Add Assignment
module.exports.addAssignment = function(assignment, callback){
    var v = new assignment_v({
        name: assignment.name,
        remark: assignment.remark,
        time_changed: Date.now(),
        staff_maker: {
             _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newAssignment = new Assignment({
        name: assignment.name, 
        remark: assignment.remark,
        versions: [v]
    });
    newAssignment.save(callback);
}

// Update Assignment
module.exports.updateAssignment = function(id, newAssignment, options, callback){
    var query = {_id:id};
    var v = {
        name: newAssignment.name,
        remark: newAssignment.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    }  

    delete newAssignment['versions'];

    var update = {$set: newAssignment, $push: {versions: v}};
    Assignment.update(query, update, options, callback);
}

module.exports.deleteAssignment = function(id, callback){
    var query = {_id:id};
    var v = new assignment_v({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    Assignment.update(query, update, callback);
}