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

  ngOnInit() {
    this.Article();
  }

}
