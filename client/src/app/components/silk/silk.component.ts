import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-silk',
  templateUrl: './silk.component.html',
  styleUrls: ['./silk.component.css']
})
export class SilkComponent implements OnInit {
  articles;

  constructor(
      private articleService: ArticleService
  ) { }

  SilkArticles() {
    this.articleService.getSilkArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.SilkArticles();
  }

}
