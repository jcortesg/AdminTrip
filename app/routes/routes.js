module.exports = function(app, passport) {
    //GET homepage
     app.get('/',notLogged,function(req, res) {
         res.render('index');
     });

    //GET login
     app.get('/login',notLogged, function(req, res) {
         res.render('index', { message: req.flash('loginMessage')  }); 
     });

     //POST login 
     app.post('/login',passport.authenticate('local-login',{
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
     }));
     //GET singup
    app.get('/signup',notLogged,function(req, res) {
        res.render('register', { message: req.flash('loginMessage')  });
    });

    //POST singup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    //GET profile

    app.get('/profile',isLoggedIn,function(req,res){
        res.render('users/show')
    })

    //GET Logout
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}

function notLogged(req, res, next){
    if(req.isAuthenticated())
        res.redirect('/profile')
    return next()
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

