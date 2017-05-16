var mongoose = require('mongoose');
var Staff = require('./staff');
var branch_version = require('./branch_version');

// Branch Schema

var branchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reg: {
        type: Date,
        default: Date.now
    },
    dis: {
        type: Boolean,
        default: true
    },
    versions: [branch_version.schema]
});

var Branch = module.exports = mongoose.model('Branch', branchSchema);

// Get Branches
module.exports.getBranches = function(callBack, limit){
    Branch.find(callBack).limit(limit);
}

// Get Branch by ID
module.exports.getBranchById = function(id, callBack){
    Branch.findById(id, callBack);
}

// Add Branch
module.exports.addBranch = function(branch, callBack){
    var v = new branch_version({
        name: branch.name,
        time_changed: Date.now(),
        staff_maker: {
             _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newBranch = new Branch({
        name: branch.name,
        versions: [v]
    });
    
    newBranch.save(callBack);
}

// Update Branch
module.exports.updateBranch = function(id, newBranch, options, callback){
    var query = {_id: id};
    var v = {
        name: newBranch.name,
        staff_members: newBranch.staff_members,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    }

    var update = {$set: newBranch, $push: {versions: v}};
    Branch.update(query, update, options, callback);
}

module.exports.deleteBranch = function(id, callback){
    var query = {_id: id};

    Branch.find(query).remove(callback);
}