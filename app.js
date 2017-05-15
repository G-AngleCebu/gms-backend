var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var autoincrement = require('mongoose-auto-increment');
app.use(bodyParser.json());

// Set CORS ORIGIN HEADERS
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept');
    next();
});

Section = require('./models/section');
Department = require('./models/department');
Staff = require('./models/staff');
Position = require('./models/position');
Branch = require('./models/branch');
Category = require('./models/category');
Category_tag = require('./models/category_tag');
Background = require('./models/background');
TypeOfWork = require('./models/typeofwork');
TypeOfOutsourced = require('./models/typeofoutsourced');
Assignment = require('./models/assignment');
CurrentStatus = require('./models/currentstatus');

// Connect to mongoose:
mongoose.connect('mongodb://localhost/gmsv1');

var staff_router = require('./routes/staff_router');
var branch_router = require('./routes/branch_router');
var position_router = require('./routes/position_router');
var department_router = require('./routes/department_router');
var category_router = require('./routes/category_router');
var categorytag_router = require('./routes/category_tag_router');
var section_router = require('./routes/section_router');
var assignment_router = require('./routes/assignment_router');
var currentstatus_router = require('./routes/currentstatus_router');
var background_router = require('./routes/background_router');
var typesofwork_router = require('./routes/typesofwork_router');
var typesofoutsourced_router = require('./routes/typesofoutsourced_router');



app.use('/api/staffs', staff_router);
app.use('/api/sections', section_router);
app.use('/api/departments', department_router);
app.use('/api/branches', branch_router);
app.use('/api/positions', position_router);
app.use('/api/categories', category_router);
app.use('/api/categorytags', categorytag_router);
app.use('/api/assignments', assignment_router);
app.use('/api/backgrounds', background_router);
app.use('/api/currentstatus', currentstatus_router);
app.use('/api/typesofwork', typesofwork_router);
app.use('/api/typesofoutsourced', typesofoutsourced_router);

var db = mongoose.connection;
autoincrement.initialize(db);

app.listen(3000);
console.log('Running on port 3000...');