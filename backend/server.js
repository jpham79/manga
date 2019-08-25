const express = require('express');
const async = require('async');
const config = require('./config/config');

async.waterfall([
  cb => {
    let app = express();
    let server = require('http').Server(app);
    let io = require('socket.io')(server);
    require('./config/express')(app);
    server.listen(config.port);
    require('./routes')(app);
    cb();
  },
], err => {
  if (err) {
    console.log("Error during server bootstrap");
    console.error(err);
  } else {
    console.log("Server is ready");
  }
}
);
