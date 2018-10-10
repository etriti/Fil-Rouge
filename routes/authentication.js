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
    } else {
      let user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
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

  return router;
}
