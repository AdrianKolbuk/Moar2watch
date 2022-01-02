var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sequelizeInit = require('./config/sequelize/init');
const authApiRouter = require('./routes/api/AuthApiRoute');
const userApiRouter = require('./routes/api/UserApiRoute');
const titleLikeApiRouter = require('./routes/api/TitleLikeApiRoute');
const titleWatchlistApiRouter = require('./routes/api/TitleWatchlistApiRoute');
const session = require('express-session');
var app = express();
var cors = require('cors');

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'my_secret_password',
  resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});

app.use('/api/auth', authApiRouter);
app.use('/api/users', userApiRouter);
app.use('/api/titleLikes', titleLikeApiRouter);
app.use('/api/titleWatchlists', titleWatchlistApiRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelizeInit()
  .catch(err => {
    console.log(err);
  });


module.exports = app;
