const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

mongoose.set('useCreateIndex', true);

let emailLengthChecker = (email) => {
  if (!email) {
    return false;
  } else {
    if (email.length < 5 || email.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};

let validEmailChecker = (email) => {
  if (!email) {
    return false;
  } else {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }
};

let passwordLengthChecker = (password) => {
  if (!password) {
    return false;
  } else {
    if (password.length < 8 || password.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};

let validPasswordChecker = (password) => {
  if (!password) {
    return false;
  } else {
    const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/);
    return regExp.test(password);
  }
};

let firstnameLengthChecker = (firstname) => {
  if (!firstname) {
    return false;
  } else {
    if (firstname.length < 2 || firstname.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};

let validFirstnameChecker = (firstname) => {
  if (!firstname) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-z ,.'-]+$/i);
    return regExp.test(firstname);
  }
};

let lastnameLengthChecker = (lastname) => {
  if (!lastname) {
    return false;
  } else {
    if (lastname.length < 2 || lastname.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};

let validLastnameChecker = (lastname) => {
  if (!lastname) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-z ,.'-]+$/i);
    return regExp.test(lastname);
  }
};

const emailValidators = [
  {
    validator: emailLengthChecker,
    message: 'Email must be valid (5 to 30 characters)'
  },
  {
    validator: validEmailChecker,
    message: 'Email must be valid'
  }
];

const passwordValidators = [
  {
    validator: passwordLengthChecker,
    message: 'Password must be valid (8 to 30 characters)'
  },
  {
    validator: validPasswordChecker,
    message: 'Password should conatin letters and at least 1 number'
  }
];

const firstnameValidators = [
  {
    validator: firstnameLengthChecker,
    message: 'Firstname must be valid (2 to 30 characters)'
  },
  {
    validator: validFirstnameChecker,
    message: 'Firstname must not contain any special character'
  }
];

const lastnameValidators = [
  {
    validator: lastnameLengthChecker,
    message: 'Lastname must be valid (5 to 30 characters)'
  },
  {
    validator: validLastnameChecker,
    message: 'Lastname must not contain any special character'
  }
];

const userSchema = new Schema({
   firstname: { type: String, trim: true, required: true, lowercase: true, validate: firstnameValidators },
   lastname: { type: String, trim: true, required: true, lowercase: true, validate: lastnameValidators },
   email: { type: String, trim: true, required: true, unique: true, lowercase: true, validate: emailValidators },
   password: { type: String, required: true, validate: passwordValidators }
 });

userSchema.pre('save', function(next) {
  if (!this.isModified('password'))
  return next();

  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema);
