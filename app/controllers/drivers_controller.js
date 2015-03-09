var driver = require('../models/driver');

express.create =function(req, res){
    var driver = new Driver({
        firstName : req.firstName,
        lastName  : req.lastName,
        id_account: req.id,
        full_name : req.full
    });
    driver.save(function(err, driver{
        if(err) return res.send(500, err.message);
        driver
    }))
}
