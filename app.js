const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/users');
const mudaRouter = require('./routes/muda');
const desafioRouter = require('./routes/desafios');
const emblemaRouter = require('./routes/emblemas');
const habitoRouter = require('./routes/habito');
const hasHabitoRouter = require('./routes/usuario_has_habito');
const hasDesafioRouter = require('./routes/usuario_has_desafio');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.use('/api/v1/usuarios', indexRouter);
app.use('/api/v1/usuarios', usuariosRouter);
// app.use('/api/v1/muda', desafiosRouter);
app.use('/api/v1/muda', mudaRouter);

app.use('/api/v1/desafio', desafioRouter);

app.use('/api/v1/emblema', emblemaRouter);

app.use('/api/v1/habitos', habitoRouter);

app.use('/api/v1/hashabito', hasHabitoRouter);

app.use('/api/v1/hasdesafio', hasDesafioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
