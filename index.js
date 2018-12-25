const express = require('express');
const app = express();
const router = express.Router();
const router2 = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const article = require('./routes/article')(router2);
const articles = require('./routes/articles')(router);
const authentication = require('./routes/authentication')(router);
const management = require('./routes/management')(router);
const bodyParser = require('body-parser');
const cors = require('cors')


//Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Could not connect to Database: ', err);
  } else {
    console.log('Connected to the Database: ', config.db);
  }
});

// Middleware

//required only to send cross data from frontend to backend
app.use(cors({
  origin: 'http://localhost:4200',
}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/client/dist')); //Provide static directory for frontend
app.use('/article', article);
app.use('/articles', articles);
app.use('/authentication', authentication);
app.use('/management', management);




//Connect server to Angular 5 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//Listening port of the server
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
