const User = require('../models/user');
const config = require('../config/database');
const jwt = require('jsonwebtoken');


module.exports = (router) => {

  router.post('/register', (req, res) => {
    if (!req.body.firstname) {
      res.json({ success: false, message:'You must provide a firstname' });
    } else if (!req.body.lastname) {
      res.json({ success: false, message:'You must provide a lastname' });
    } else if (!req.body.email) {
      res.json({ success: false, message:'You must provide an e-mail' });
    } else if (!req.body.password) {
      res.json({ success: false, message:'You must provide a password' });
    } else if (!req.body.passwordConf) {
      res.json({ success: false, message:'You must confirm password' });
    } else if (req.body.passwordConf !== req.body.password) {
      res.json({ success: false, message:'Password confirmation do not match with your password' });
    } else {
      let user = new User({
        firstname: req.body.firstname.toLowerCase(),
        lastname: req.body.lastname.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password
      });
      user.save((err) => {
        if (err) {
          if (err.code===11000) {
            res.json({ success: false, message: 'This email exists in our database'});
          } else {
            if (err.errors) {
              if (err.errors.email) {
                res.json({ success: false, message: err.errors.email.message });
              } else if (err.errors.password) {
                res.json({ success: false, message: err.errors.password.message });
              } else if (err.errors.firstname) {
                res.json({ success: false, message: err.errors.firstname.message });
              } else if (err.errors.lastname) {
                res.json({ success: false, message: err.errors.lastname.message });
              }
            } else {
              res.json({ success: false, message: 'Could not save user. Error: ', err });
            }
          }
          return;
        } else {
          res.json({ success: true, message: 'User successfully saved' });
        }
      });
    }
  });

  router.get('/checkEmailExistance/:email', (req, res) => {
  // Check if email was provided in paramaters
  if (!req.params.email) {
    res.json({ success: false, message: 'E-mail was not provided' }); // Return error
  } else {
    // Search for user's e-mail in database;
    User.findOne({ email: req.params.email }, (err, user) => {
      if (err) {
        res.json({ success: false, message: err }); // Return connection error
      } else {
        // Check if user's e-mail is taken
        if (user) {
          res.json({ success: false, message: 'E-mail is already taken' }); // Return as taken e-mail
        } else {
          res.json({ success: true, message: 'E-mail is available' }); // Return as available e-mail
        }
      }
    });
  }
});


// Login Route

  router.post('/login', (req, res) => {
    if (!req.body.email) {
      res.json({ success: false, message: "No email was provided" });
    } else {
      if (!req.body.password) {
        res.json({ success: false, message: "No password was provided" });
      } else {
        User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
          if (err) {
            res.json({ success: false, message: err });
          } else {
            if (!user) {
              res.json({ success: false, message: "Email was found in our database" });
            } else {
              const validPassword = user.comparePassword(req.body.password);
              if (!validPassword) {
                res.json({ success: false, message: "Password is invalid" });
              } else {
                const token = jwt.sign({
                  userId: user._id
                }, config.secret, { expiresIn: '24h' });



                res.json({ success: true, message: "Success!", token: token, user: { firstname: user.firstname, lastname: user.lastname, email: user.email} });
              }
            }
          }
        });
      }
    }
  });

  router.use((req, res, next) => {
    const token = req.headers['authorisation'];

    if (!token) {
      res.json({ success: false, message: 'No token provided'});
    } else {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          res.json({success: false, message: 'Invalid token: ' + err})
        } else {
          req.decoded = decoded;
          next();
        }
      });
    }
  });

  router.get('/account', (req, res) => {
    User.findOne({ _id: req.decoded.userId }).select('firstname lastname email').exec((err, user) => {
      if (err) {
        res.json({ success: false, message:'User not found'});
      } else {
        res.json({ success: true, user: user });
      }
    });
  });

  return router;
}
