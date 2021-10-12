const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');
const connectEnsureLogin = require('connect-ensure-login');

router.post('/signup', function (req, res) {
  Users = new User({ email: req.body.email, username: req.body.username });
  User.register(Users, req.body.password, function (err, user) {
    if (err) {
      res.json(
        {
          success: false,
          message: "Your account could not be saved.Error: " + err
        }
      )
    } else {
      res.json(
        {
          success: true,
          message: "Your account has been saved"
        })
    }
  });
});
router.post('/login', passport.authenticate('local'), (req, res) => {

  User.findOne({
    username: req.body.username
  }, (err, person) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      status: 'You are successfully logged in!'
    });
  })
})

router.post('/logout', (req, res, next) => {
  if (req.session) {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie('session-id');
        res.json({
          message: 'You are successfully logged out!'
        });
      }
    });
  } else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

router.get('/',connectEnsureLogin.ensureLoggedIn(), (req, res, next) => {
  console.log(req.user)
})
module.exports = router;