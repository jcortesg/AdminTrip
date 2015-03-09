var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var util = require('util');

var AbstractUserSchema= function() {
    Schema.apply(this, arguments);
    this.add({  
        firstName   : String,
        lastName    : String,
        phone       : Number,
        email       : String,
        password    : String
    });

}
util.inherits(AbstractUserSchema, Schema);

module.exports = AbstractUserSchema;
