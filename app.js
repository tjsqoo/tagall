// load express module
import express from './loaders/express.js';
const app = await express();


// set http module
import http from 'http';
const server = http.createServer(app);


// load database module
import redis from './loaders/redis.js';
const database = await redis(JSON.parse(process.env.REDIS));

// set routes
import indexRouter from './routes/index.js';
app.use('/', indexRouter);

import usersRouter from './routes/users.js';
app.use('/users', usersRouter);

server.listen(process.env.PORT);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}