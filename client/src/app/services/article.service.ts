import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  domain = this.authService.domain;
  article;
  authToken;
  options;
  title;

  constructor(
    public authService: AuthService,
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

  getArticle(_id) {
    return this.http.get(this.domain + 'article/' + _id, this.options).map(res => res.json());
  }

  getAllArticles() {
    return this.http.get(this.domain + 'articles/allArticles', this.options).map(res => res.json());
  }

  getCottonArticles() {
    return this.http.get(this.domain + 'articles/CottonArticles', this.options).map(res => res.json());
  }
  getSilkArticles() {
    return this.http.get(this.domain + 'articles/SilkArticles', this.options).map(res => res.json());
  }
  getMetallicArticles() {
    return this.http.get(this.domain + 'articles/MetallicArticles', this.options).map(res => res.json());
  }
  getAll_purposeArticles() {
    return this.http.get(this.domain + 'articles/All-purposeArticles', this.options).map(res => res.json());
  }
  getPolyesterArticles() {
    return this.http.get(this.domain + 'articles/PolyesterArticles', this.options).map(res => res.json());
  }
  getBuildingArticles() {
    return this.http.get(this.domain + 'articles/BuildingArticles', this.options).map(res => res.json());
  }
}
