const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const validateProfileInput = require('../validation/profile');
const validatePasswordInput = require('../validation/passwordcheck');
// Load User model
const User = require('../models/User');
const WatchList = require('../models/WatchList');

/*  
@route POST api/users/register
@desc Register user
@access Public
*/
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstname: '',
        lastname: '',
        address: '',
        gender: '',
        avatar: '',
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
/*
@route POST api/users/login
@desc Login user and return JWT token
@access Public
*/
router.post('/login', (req, res) => {
  console.log(req.body);
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          gender: user.gender,
          address: user.address,
          register_date: user.date,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

router.post('/profile', (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const gender = req.body.gender;

  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    } else {
      user.username = username;
      user.email = email;
      user.firstname = firstname;
      user.lastname = lastname;
      user.address = address;
      user.gender = gender;

      user.save();

      // Create JWT Payload
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        address: user.address,
        register_date: user.date,
      };
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926, // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token,
          });
        }
      );
    }
  });
});

router.post('/changepassword', (req, res) => {
  const { errors, isValid } = validatePasswordInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ usernamenotfound: 'User not found' });
    } else {
      //Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user.save();
        });
      });
    }
  });
});

router.post('/addWatchList', (req, res) => {
  const email = req.body.email;
  const postid = req.body.postid;
  const newpostid = ',' + postid;
  WatchList.findOne({ email }).then((watchlist) => {
    // Check if user exists
    if (!watchlist) {
      const newwatchlist = new WatchList({
        email: email,
        postid: postid,
      });
      newwatchlist
        .save()
        .then((watchlist) => res.json(watchlist))
        .catch((err) => console.log(err));
    } else {
      //if postid is in database
      if (watchlist.postid.search(postid) != -1) {
        console.log('this post is added to watchlist by user');
        //remove from watchlist??
      } else {
        //watchlist.postid = watchlist.postid +",";
        watchlist.postid = watchlist.postid + newpostid;
        console.log(watchlist.postid);
        watchlist
          .save()
          .then((watchlist) => res.json(watchlist))
          .catch((err) => console.log(err));
      }
    }
  });
});

router.get('/getavatarname/:useremail', (req, res) => {
  const email = req.params.useremail;
  //console.log(email);
  User.findOne({ email }).then((user) => {
    const avatar_name = user.avatar;

    if (avatar_name.length === 0) {
      return res.status(404).json({
        message: "user don't have avatar",
      });
    }
    return res.json(avatar_name);
  });
});

module.exports = router;
