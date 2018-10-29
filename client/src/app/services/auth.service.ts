import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

domain = 'http://localhost:8080';
authToken;
user;
options;

  constructor(
    private http: Http
  ) { }

  createAuthenticationHeader() {
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorisation': this.authToken
      })
    });
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  checkEmailExistance(email) {
    return this.http.get(this.domain + '/authentication/checkEmailExistance/' + email).map(res => res.json());
  }

  // Function to log the user in
  login(user) {
    return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    window.location.reload();
  }

  // Store the token and the user in the browser
  storeUserData (token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getAccount() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + '/authentication/account', this.options).map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
