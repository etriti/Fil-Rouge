import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  domain = this.authService.domain;
  article;
  authToken;
  options;

  constructor(
    private authService: AuthService,
    private http: Http,
  ) { }

  createAuthenticationHeader() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorisation': this.authService.authToken
      })
    });
  }

  registerArticle(article) {
    this.createAuthenticationHeader();
    return this.http.post(this.domain + 'management/newArticle', article, this.options).map(res => res.json());
  }


  getAllArticles() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'management/allArticles', this.options).map(res => res.json());
  }

}