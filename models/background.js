var mongoose = require('mongoose');
var background_version = require('./background_version');

var background_schema = mongoose.Schema({
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
    versions: [background_version.schema]
});

var Background = module.exports = mongoose.model('Background', background_schema);

// Get Backgrounds
module.exports.getBackground = function(callback, limit){
    Background.find({dis: true}, callback).limit(limit);
}

// Get Background by ID
module.exports.getBackgroundById = function(id, callback){
    Category.findById(id, callback);
}

// Add Background
module.exports.addBackground = function(background, callback){
    var v = new background_version({
        name: background.name,
        remark: background.remark,
        time_changed: Date.now(),
        staff_maker: {
             _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newBackground = new Background({
        name: background.name,
        remark: background.remark,
        versions: [v]
    });
    newBackground.save(callback);
}

// Update Background
module.exports.updateBackground = function(id, newBackground, options, callback){
    var query = {_id:id};
    var v = {
        name: newBackground.name,
        remark: newBackground.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    };

    var update = {$set: newBackground, $push: {versions: v}};
    Background.update(query, update, options, callback);
}

module.exports.deleteBackground = function(id, callback){
    var query = {_id:id};
    var v = new background_version({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    Background.update(query, update, callback);
}