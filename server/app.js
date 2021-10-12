const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 3000;
const db = require('./db');
const User = require('./models/user.js')
const userRouter = require('./route/user.js');

const passport = require('passport');
const session = require('express-session');
app.use(session({
  name: 'session-id',
  secret: 'secret',
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.json());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('hello, world')
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on port: ' + port)
  }
})