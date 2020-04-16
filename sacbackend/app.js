const express = require('express');
const path = require('path');
const crypto = require('crypto');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFSStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//Middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride('method'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
var commentRouter = require('./routes/comment');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

//Mongo setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;
//Init gfs
let gfs;

connection.once('open',()=>{
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('uploads');
  console.log("MongoDB datavase connection established successfully");
});

//Create storage engine
const storage = new GridFSStorage({
  url: uri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

/*app.post('/upload', upload.single('file'),(req, res) => {
  res.json({file: req.file});
});*/

//Init server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});


module.exports = app;
