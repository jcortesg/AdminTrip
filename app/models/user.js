var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var AbstractUserSchema = require('./abstractUserSchema');


var userSchema = new AbstractUserSchema(); 

// generating a hash
userSchema.methods.generateHash = function(password) {
     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

// create the models
module.exports = mongoose.model('User', userSchema);
