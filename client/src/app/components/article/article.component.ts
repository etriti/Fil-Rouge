import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article;
  currentUrl;
  views;
  id;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  Article() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    this.articleService.getArticle(this.currentUrl._id).subscribe(data => {
      this.article = data.article;
      console.log(data);
    });
  }

  UpdateViews() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    this.articleService.getArticle(this.currentUrl._id).subscribe(data => {
        this.id = data.article._id;
        this.views = data.article.views;
        this.views++;
        const newView = {
          id: this.id,
          views: this.views
        }
        this.articleService.putArticleView(newView).subscribe(data => {
          console.log(data);
        });
    });
  }

  ngOnInit() {
    this.UpdateViews();
    this.Article();
  }

}
