import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-cotton',
  templateUrl: './cotton.component.html',
  styleUrls: ['./cotton.component.css']
})
export class CottonComponent implements OnInit {
  articles;

  constructor(
    private articleService: ArticleService,
  ) { }

  CottonArticles() {
    this.articleService.getCottonArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.CottonArticles();
  }

}
