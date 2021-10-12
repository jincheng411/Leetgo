const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.post('/register', function (req, res) {
  console.log('jinjinjinjin')
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
module.exports = router;