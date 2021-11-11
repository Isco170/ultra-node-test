var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./database');
require('./database/data');

var indexRouter = require('./routes/index');
const userRoutes = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api', userRoutes);

module.exports = app;
