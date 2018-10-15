const User = require('../models/user');

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


  return router;
}
