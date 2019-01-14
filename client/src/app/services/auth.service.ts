import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import { tokenNotExpired } from 'angular2-jwt';
// import { tokenNotExpired } from '@auth0/angular-jwt';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

domain = 'http://localhost:8080/';// dev mode
// domain = '';// prod mode
authToken;
user;
options;

  constructor(
    private http: Http,
    private router: Router,
    public jwtHelper: JwtHelperService
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
    return this.http.post(this.domain + 'authentication/register', user).map(res => res.json());
  }

  checkEmailExistance(email) {
    return this.http.get(this.domain + 'authentication/checkEmailExistance/' + email).map(res => res.json());
  }

  // Function to log the user in
  login(user) {
    return this.http.post(this.domain + 'authentication/login', user).map(res => res.json());
  }

  logout() {
    this.authToken = null;
    // this.user = null;
    localStorage.clear();
    // this.router.navigate(['/'])
    // window.location.reload();
  }

  // Store the token and the user in the browser
  storeUserData (token, user) {
    localStorage.setItem('token', token);
    // localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    // this.user = user;
  }

  getAccount() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'authentication/account', this.options).map(res => res.json());
  }

  loggedIn() {
    // console.log(this.jwtHelper.isTokenExpired()); // true or false
    // // return tokenNotExpired();
    // return true;
    // const token = this.jwtHelper.getItem('token');
    // console.log(token);
    // if (!token) return false;
    //
    // return !this.jwtHelper.isTokenExpired();

  const token = localStorage.getItem('token');
  // console.log("am i loggedIn? " + !this.jwtHelper.isTokenExpired(token));
  return !this.jwtHelper.isTokenExpired(token);
  }

//Token Exipiration-Actual Time
  ExpirationDate(){
      setInterval(() => {
          if (!localStorage.token) {
              console.log("There is no Token");
              return false;
          } else {
              const token = localStorage.getItem('token');
              const fulldate = this.jwtHelper.getTokenExpirationDate(token);
              const fulldateDecoded = (fulldate.getTime())/1000;
              const timeNow = (Date.now())/1000;
              console.log(fulldate); // date
              console.log(fulldateDecoded) ;
              console.log(timeNow);
              const timeCheck = fulldateDecoded - timeNow;
              console.log(timeCheck);

                if (timeCheck <= 45) {
                  this.logout();
                  this.router.navigate(['/']);
                  console.log('token has expired');
                } else {
                   console.log('token not yet expired');
                }
          }
    }, 30000);
  }



  hasAccess() {
    const expectedRole1 = "admin";
    const expectedRole2 = "user";
    const token = localStorage.getItem('token');

    // if ((decode(token).role === expectedRole1) || (decode(token).role === expectedRole2)) {
    if (decode(token).role === expectedRole1) {
      return true;
    } else {
      return false;
    }
  }

}
