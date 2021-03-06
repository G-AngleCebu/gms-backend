var mongoose = require('mongoose');
var Staff = require('./staff');
var section_version = require('./section_version');

// Section Schema
var sectionSchema = mongoose.Schema({
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
    versions: [section_version.schema]
});

var Section = module.exports = mongoose.model('Section', sectionSchema);

// Get Sections
module.exports.getSections = function(callback, limit){
    Section.find({dis: true}, callback).limit(limit);
}

// Get Section by ID
module.exports.getSectionById = function(id, callback){
    Section.findById(id, callback);
}

// Add Section
module.exports.addSection = function(section, callback){
    var v = new section_version({
        name: section.name,
        remark: section.remark,
        staff_members: section.staff_members,
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newSection = new Section({
        name: section.name,
        remark: section.remark,
        staff_members: section.staff_members,
        versions: [v]
    });
    newSection.save(callback);
}

// Update Section
module.exports.updateSection = function(id, newSection, options, callback){
    var query = {_id: id};
    var v = new section_version({
        name: newSection.name,
        remark: newSection.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    })
    delete newSection['versions'];
    var update = {$set: newSection, $push: {versions: v}};
    Section.update(query, update, options, callback);
}

module.exports.deleteSection = function(id, callback){
    var query = {_id:id};
    var v = new section_version({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });
    var update = {$set: {dis: false}, $push:{versions: v}};
    Section.update(query, update, callback);
}