const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  // uri: 'mongodb://localhost:27017/fil-rouge', //local mongodb
  uri: 'mongodb://etrithalili:halili68@ds161710.mlab.com:61710/fil-rouge', //Production database
  secret: crypto,
  db: 'fil-rouge'
}
