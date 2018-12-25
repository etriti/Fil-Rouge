import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-polyester',
  templateUrl: './polyester.component.html',
  styleUrls: ['./polyester.component.css']
})
export class PolyesterComponent implements OnInit {
  articles;

  constructor(
    private articleService: ArticleService,
  ) { }

  PolyesterArticles() {
    this.articleService.getPolyesterArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.PolyesterArticles();
  }

}
