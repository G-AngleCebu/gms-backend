var mongoose = require('mongoose');
var staff_version = require('./staff_version');
var section = require('./section')
var Branch = require('./branch');
var Department = require('./department');
var Position = require('./position');
var staffSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
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
        required: true
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
        type: String
    },
    reg: {
        type: Date,
        default: Date.now
    },
    dis: {
        type: Boolean,
        default: true
    },
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: false
    }],
    departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
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
    versions: [staff_version.schema]
});

var Staff = module.exports = mongoose.model('Staff', staffSchema);

// Get Staffs
module.exports.getStaffs = function(callback, limit){
<<<<<<< HEAD
    var populateQuery = [{path:'sections', model: 'Section'}, {path: 'departments', model: 'Department'}, {path: 'branches', model: 'Branch'}, {path: 'positions', model: 'Position'}, {path: 'versions.staff_maker', model: 'Staff', select: 'name'}];

    Staff.find({dis: true}).populate(populateQuery).exec(callback);
    // Staff.find({dis: true}).populate(populateQuery).exec(function(err, staffs){
    //     callback(err, staffs);
    // });
    
=======
    var populateQuery = [{path:'sections', model: 'Section'}, {path: 'departments', model: 'Department'}, {path: 'branches', model: 'Branch'}, {path: 'positions', model: 'Position'}];
>>>>>>> 0f92f46cd8d23637d92ea6a20a899c75cab33397
    
}

// Get Staff by ID
module.exports.getStaffById = function(id, callback){
    var populateQuery = [{path:'sections', model: 'Section'}, {path: 'departments', model: 'Department'}, {path: 'branches', model: 'Branch'}, {path: 'positions', model: 'Position'}];
    
    Staff.findById(id).populate(populateQuery).exec(callback);
}

// Add Staff
module.exports.addStaff = function(staff, callback){

    var v = new staff_version({
        name: staff.name,
        birth: staff.birth,
        gender: staff.gender,
        blood: staff.blood,
        post_1: staff.post_1,
        address_1: staff.address_1,
        post_2: staff.post_2,
        address_2: staff.address_2,
        phone_home: staff.phone_home,
        phone_mobile: staff.phone_mobile,
        phone_emergency: staff.phone_emergency,
        email_mobile: staff.email_mobile,
        email_pc: staff.email_pc,
        commuting_route: staff.commuting_route,
        commuting_time: staff.commuting_time,
        transportation_cost_one_time: staff.transportation_cost_one_time,
        transportation_cost_1m: staff.transportation_cost_1m,
        transportation_cost_6m: staff.transportation_cost_6m,
        joined_date: staff.joined_date,
        leave_date: staff.leave_date,
        permit_level: staff.permit_level,
        password: staff.password,
        hourly_wage: staff.hourly_wage,
        profile_picture: staff.profile_picture,
        sections: staff.sections,
        time_changed: Date.now(),
        staff_maker: {
             _id: '591a667ec9540eb1995be1e6',
        }
    });
    var newStaff = new Staff({
        name: staff.name,
        birth: staff.birth,
        gender: staff.gender,
        blood: staff.blood,
        post_1: staff.post_1,
        address_1: staff.address_1,
        post_2: staff.post_2,
        address_2: staff.address_2,
        phone_home: staff.phone_home,
        phone_mobile: staff.phone_mobile,
        phone_emergency: staff.phone_emergency,
        email_mobile: staff.email_mobile,
        email_pc: staff.email_pc,
        commuting_route: staff.commuting_route,
        commuting_time: staff.commuting_time,
        transportation_cost_one_time: staff.transportation_cost_one_time,
        transportation_cost_1m: staff.transportation_cost_1m,
        transportation_cost_6m: staff.transportation_cost_6m,
        joined_date: staff.joined_date,
        leave_date: staff.leave_date,
        permit_level: staff.permit_level,
        password: staff.password,
        hourly_wage: staff.hourly_wage,
        profile_picture: staff.profile_picture,
        sections: staff.sections,
        departments: staff.departments,
        branches: staff.branches,
        positions: staff.positions,
        versions: [v]
    });
    var populateQuery = [{path:'sections', model: 'Section'}, {path: 'departments', model: 'Department'}, {path: 'branches', model: 'Branch'}, {path: 'positions', model: 'Position'}];
    mongoose.model('Staff').populate(newStaff, populateQuery, function(err, staff){
        console.log(staff);
    })
    newStaff.save(callback);

    
}

// Update Staff
module.exports.updateStaff = function(id, newStaff, options, callback){
    var query = {_id: id};
    var v = new staff_version({
        name: newStaff.name,
        birth: newStaff.birth,
        gender: newStaff.gender,
        blood: newStaff.gender,
        post_1: newStaff.post_1,
        address_1: newStaff.address_1,
        post_2: newStaff.post_2,
        address_2: newStaff.address_2,
        phone_home: newStaff.phone_home,
        phone_mobile: newStaff.phone_mobile,
        phone_emergency: newStaff.phone_emergency,
        email_mobile: newStaff.email_mobile,
        email_pc: newStaff.email_pc,
        commuting_route: newStaff.commuting_route,
        commuting_time: newStaff.commuting_time,
        transportation_cost_one_time: newStaff.transportation_cost_one_time,
        transportation_cost_1m: newStaff.transportation_cost_1m,
        transportation_cost_6m: newStaff.transportation_cost_6m,
        joined_date: newStaff.joined_date,
        leave_date: newStaff.leave_date,
        permit_level: newStaff.permit_level,
        password: newStaff.password,
        hourly_wage: newStaff.hourly_wage,
        profile_picture: newStaff.profile_picture,
        sections: newStaff.sections,
        branches: newStaff.branches,
        positions: newStaff.positions,
        departments: newStaff.departments,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6',
        }
    });

    var populateQuery = [{path:'sections', model: 'Section'}, {path: 'departments', model: 'Department'}, {path: 'branches', model: 'Branch'}, {path: 'positions', model: 'Position'}];

    mongoose.model('Staff').populate(newStaff, populateQuery, function(err, staff){
        console.log(staff);
        var update = {$set: newStaff, $push: {versions: v}};
        Staff.update(query, update, options, callback);
    });

}

module.exports.deleteStaff = function(id, callback){
    var query = {_id: id};
    var staff = new staff_version({
        dis: false,
        time_changed: Date.now(),
        staff_maker: {
            _id: '591a667ec9540eb1995be1e6'
        }
    });

    var update = {$set: {dis: false}, $push: {versions: staff}};
    Staff.update(query, update, options, callback);
}
