import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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

  onRegisterSubmit() {
    console.log("form submitted");
  }

  ngOnInit() {
  }

}
