var mongoose = require('mongoose');
var Staff = require('./staff');
var position_version = require('./position_version');
// Position Schema

var positionSchema = mongoose.Schema({
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
    versions: [position_version.schema]
});

var Position = module.exports = mongoose.model('Position', positionSchema);

// Get Positions
module.exports.getPositions = function(callback, limit){
    Position.find({dis: true}, callback).limit(limit);
}

// Get Position by ID
module.exports.getPositionById = function(id, callback){
    Position.findById(id, callback);
}

// Add Position
module.exports.addPosition = function(position, callback){
    var v = new position_version({
        name: position.name,
        staff_members: position.staff_members,
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });  

    var newPosition = new Position({
        name: position.name,
        staff_members: position.staff_members,
        versions: [v]
    });
    newPosition.save(callback);
}

// Update Position
module.exports.updatePosition = function(id, newPosition, options, callback){
    var query = {_id: id};
    var v = new position_version({
        name: newPosition.name,
        staff_members: newPosition.staff_members,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });

    var update = {$set: newPosition, $push: {versions: v}};
    Position.update(query, update, options, callback);
}

module.exports.deletePosition = function(id, callback){
    var query = {_id:id};
    var v = new position_version({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    Position.update(query, update, callback);
}