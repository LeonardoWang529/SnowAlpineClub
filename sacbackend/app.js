const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
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
var postImageRouter = require('./routes/postimage');
let imagedbRouter = require('./routes/imagedbutil');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/postimages', postImageRouter);
app.use('/uploadPostImage',imagedbRouter);

//Mongo setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
  console.log("MongoDB datavase connection established successfully");
});

//Init server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`Server is running on port: ${port}`);
});


module.exports = app;
