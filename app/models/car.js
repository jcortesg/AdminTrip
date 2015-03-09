var mongoose = require('mongoose'), 
    Schema = mongoose.Schema

var carSchema = mongoose.Schema({
    plate   : String,
    model   : String,
    brand   : String,
    admin   : {type: String,  ref: 'User' }
    driver  : {type: String,  ref: 'Driver'}
});

model.exports = mongoose.model('Car',driverSchema);
