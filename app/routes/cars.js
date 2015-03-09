module.exports  =   function(app, passport){
    //GET index cars
    app.get('/cars',function(req, res){
        res.render('/index');
    });
}


function notLogged(req, res, next){
    if(req.isAuthenticated())
        res.redirect('/profile')
    return next()
}
