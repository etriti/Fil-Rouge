import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-metallic',
  templateUrl: './metallic.component.html',
  styleUrls: ['./metallic.component.css']
})
export class MetallicComponent implements OnInit {
    articles;

  constructor(
    private articleService: ArticleService,
  ) { }

  MetallicArticles() {
    this.articleService.getMetallicArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.MetallicArticles();
  }

}
