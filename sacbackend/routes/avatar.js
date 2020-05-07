const express = require('express');
const router = express.Router();

/*
Multer is a NodeJS middleware which facilitates file uploads. 
GridFsStorage is GridFS storage engine for Multer to store uploaded files directly to MongoDB. 
Crypto and Path will be used to create unique name for the file uploaded.
*/
const crypto = require('crypto');
const path = require('path');

const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
const User = require('../models/User');
// init gfs for avatar
let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads',
  });
});

// Storage
const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({
  storage,
});

router.post('/upload/:useremail', upload.single('file'), (req, res) => {
  const email = req.params.useremail;
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    } else {
      user.avatar = req.file.filename;

      user
        .save()
        //.then(user => res.json(user))
        .catch((err) => console.log(err));
    }
  });
  res.redirect('/');
});

router.get('/image/:filename', (req, res) => {
  // console.log('id', req.params.id)
  const file = gfs
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'no files exist',
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

module.exports = router;
