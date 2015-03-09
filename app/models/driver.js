var mongoose = require('mongoose');
var bcrypt  =  require('bcrypt-nodejs');
var AbstractUserSchema = require('./abstractUserSchema');

var driverSchema = new AbstractUserSchema(
    id_account  : String,
    full        : String
    );

model.exports= mongoose.model('Driver', driverSchema);
