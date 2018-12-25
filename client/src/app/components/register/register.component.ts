import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.createForm()
  }

  createForm()  {
    this.form = this.formBuilder.group({
      firstname: ["", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        this.validateName
      ])],
      lastname: ["", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        this.validateName
      ])],
      email: ["", Validators.compose([
        Validators.required,
        this.validateEmail
      ])],
      password: ["", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        this.validatePassword
      ])],
      passwordConf: ["", Validators.required]
    }, { validator: this.matchingPassword('password', 'passwordConf') });
  }

  disableForm() {
    this.form.controls['firstname'].disable();
    this.form.controls['lastname'].disable();
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
    this.form.controls['passwordConf'].disable();
  }

  enableForm() {
    this.form.controls['firstname'].enable();
    this.form.controls['lastname'].enable();
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
    this.form.controls['passwordConf'].enable();
  }

  validateEmail(controls) {
    const regExp = new
    RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateEmail': true }
    }
  }

  validateName(controls) {
    const regExp = new
    RegExp(/^[a-z ,.'-]+$/i);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateName': true }
    }
  }

  validatePassword(controls) {
    const regExp = new
    RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validatePassword': true }
    }
  }

  matchingPassword(password, passwordConf) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[passwordConf].value) {
        return null;
      } else {
        return {'matchingPassword': true};
      }
    }
  }

  onRegisterSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      passwordConf: this.form.get('passwordConf').value
    }

    this.authService.registerUser(user).subscribe(data => {
      // console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    });
  }

  CheckEmail() {
    const email = this.form.get('email').value;

    this.authService.checkEmailExistance(email).subscribe(data => {
      if (data.success) {
        this.emailValid = false;
        this.emailMessage = data.message;
        console.log(data);
      } else {
        this.emailValid = true;
        this.emailMessage = data.message;
        console.log(data);
      }
    });
  }

  ngOnInit() {
  }

}
