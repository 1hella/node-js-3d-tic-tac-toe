var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Login'
    });
});

router.post('/', (req, res, next) => {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, (err, user) => {
        if (err) {
            res.render('login', {
                title: 'Login',
                error: `Error: ${err}`
            });
        } else if (!user) {
            res.render('login', {
                title: 'Login',
                error: 'Username or password was incorrect'
            });
        } else {
            req.session.user = user;
            res.redirect('../');
        }
    });
});

module.exports = router;