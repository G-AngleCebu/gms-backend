var mongoose = require('mongoose');
var typeOfOutsourced_v = require('./typeofoutsourced_version');

var outsourced_schema = mongoose.Schema({
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
    versions: [typeOfOutsourced_v.schema]
});

var TypeOfOutsourced = module.exports = mongoose.model('TypeOfOutsourced', outsourced_schema);

// Get types of outsourced
module.exports.getTypesOfOutsourced = function(callback, limit){
    Section.find({dis: true}, callback).limit(limit);
}

// Get Type of Outsourced by ID
module.exports.getTypeOfOutsourcedById = function(callback, limit){
    TypeOfOutsourced.findById(id, callback);
}

// Add Type of Outsourced
module.exports.addTypeOfOutsourced = function(typeOfOutsourced, callback){
    var v = new typeOfOutsourced_v({
        name: typeOfOutsourced.name,
        remark: typeOfOutsourced.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    })
    var newTypeOfOutsourced = new TypeOfOutsourced({
        name: typeOfOutsourced.name,
        remark: typeOfOutsourced.remark,
        versions: [v]
    });

    newTypeOfOutsourced.save(callback);
}

// Update Type of Outsourced
module.exports.updateTypeOfOutsourced = function(id, newTypeOfOutsourced, options, callback){
    var query = {_id:id};
    var v = {
        name: newTypeOfOutsourced.name,
        remark: newTypeOfOutsourced.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    };
    delete newTypeOfOutsourced['versions'];
    var update = {$set: newTypeOfOutsourced, $push: {versions: v}};
    TypeOfOutsourced.update(query, update, options, callback);
}

module.exports.deleteTypeOfOutsourced = function(id, callback){
    var query = {_id:id};
    var v = new typeOfOutsourced_v({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    TypeOfOutsourced.update(query, update, callback);
}