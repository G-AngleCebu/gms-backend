var mongoose = require('mongoose');
var Staff = require('./staff');
var dept_version = require('./department_version');
// Section Schema

var departmentSchema = mongoose.Schema({
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
    versions: [dept_version.schema]
});

var Department = module.exports = mongoose.model('Department', departmentSchema);

// Get Departments
module.exports.getDepartments = function(callback, limit){
    Department.find(callback).limit(limit);
}

// Get Department by ID
module.exports.getDepartmentById = function(id, callback){
    Department.findById(id, callback);
}

// Add Department
module.exports.addDepartment = function(department, callback){
    var v = new dept_version({
        name: department.name,
        remark: department.remark,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    });
    var newDepartment = new Department({
        name: department.name,
        remark: department.remark,
        versions: [v]
    });

    newDepartment.save(callback);
}

// Update Department
module.exports.updateDepartment = function(id, newDepartment, options, callback){
    var query = {_id: id};
    var v ={
        name: newDepartment.name,
        remark: newDepartment.remark,
        staff_members: newDepartment.staff_members,
        time_changed: Date.now(),
        staff_maker: {
            _id: '590ad89e019f941b14e589d9',
            name: 'eunice'
        }
    }
    var update = {$set: newDepartment, $push: {versions: v}};
    Department.update(query, update, options, callback);
}