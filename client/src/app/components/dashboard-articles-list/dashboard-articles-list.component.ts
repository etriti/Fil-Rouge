import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ManagementService } from '../../services/management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-articles-list',
  templateUrl: './dashboard-articles-list.component.html',
  styleUrls: ['./dashboard-articles-list.component.css']
})
export class DashboardArticlesListComponent implements OnInit {

  articles;
  article;
  currentUrl;
  propertyName;
  reverse;
  sortBy;

  constructor(
    private managementService: ManagementService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }

  getAllArticles() {
    this.managementService.getAllArticles().subscribe(data => {
      console.log(data.articles.length);
      this.articles = data.articles;
    });
  }

  onDeleteArticleClick() {
    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.article.id; // When component loads, grab the id
    console.log(this.article._id);
    // this.managementService.deleteArticle(_id).subscribe(
    // result => console.log(result),
    // err => console.error(err)
  // );;
  }

  ngOnInit() {
    this.getAllArticles();
 };

}
