import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  articles;

  constructor(
    private articleService: ArticleService,
  ) { }

  AllArticles() {
    this.articleService.getAllArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.AllArticles();
  }

}
