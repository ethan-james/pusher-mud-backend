var express = require('express');
var router = express.Router();
var Pusher = require('pusher');
var users = require('../users');

var pusher = new Pusher({
  appId: '457285',
  key: '2c0a72aec54648a29b9a',
  secret: '57ef7bd2f18ccbbd0bea',
  cluster: 'us2',
  encrypted: true
});

router.post('/auth', (req, res, next) => {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var user = users.getUser(socketId);
  var presenceData = {
    user_id: socketId,
    user_info: {
      name: user.name,
      race: user.race,
      class: user.class
    }
  };

  var auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

module.exports = router;