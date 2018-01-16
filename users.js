const users = {};

function registerUser(sessionId, name, race, cls) {
  users[sessionId] = {
    name,
    race,
    class: cls
  };
}

function getUser(sessionId) {
  return users[sessionId];
}

module.exports = {
  registerUser,
  getUser
};