var mongoose = require('mongoose');
var typeofwork_version = require('./typeofwork_version');

var typeofwork_schema = mongoose.Schema({
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
    versions: [typeofwork_version.schema]
});

var TypeOfWork = module.exports = mongoose.model('TypeOfWork', typeofwork_schema);


// Get Types of Work
module.exports.getTypesOfWork = function(callback, limit){
    TypeOfWork.find(callback).limit(limit);   
}

// Get Type of Work by ID
module.exports.getTypOfWorkById = function(id, callback){
    TypeOfWork.findById(id, callback);
}

// Add Type of Work
module.exports.addTypeOfWork = function(typeofwork, callback){
    var v = new typeofwork_version({
        name: typeofwork.name,
        remark: typeofwork.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newTypeofWork = new TypeOfWork({
        name: typeofwork.name,
        remark: typeofwork.remark,
        versions: [v]
    });

    newTypeofWork.save(callback);
}

// Update Type of Work
module.exports.updateTypeOfWork = function(id, newTypeofWork, options, callback){
    var query = {_id:id};
    var v = {
        name: newTypeofWork.name,
        remark: newTypeofWork.remark,
        time_changed: Date.now(),
        staff_maker:{
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    }
    var update = {$set: newTypeofWork, $push:{versions: v}};
    TypeOfWork.update(query, update, options, callback);
}

