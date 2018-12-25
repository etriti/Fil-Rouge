import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-all-purpose',
  templateUrl: './all-purpose.component.html',
  styleUrls: ['./all-purpose.component.css']
})
export class AllPurposeComponent implements OnInit {
  articles;

  constructor(
    private articleService: ArticleService,
  ) { }

  All_PurposeArticles() {
    this.articleService.getAll_purposeArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.All_PurposeArticles();
  }

}
