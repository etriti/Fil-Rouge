import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  articles;

  constructor(
    private articleService: ArticleService,
  ) { }

  BuildingArticles() {
    this.articleService.getBuildingArticles().subscribe(data => {
      this.articles = data.articles;
      console.log(data);
    });
  }

  ngOnInit() {
    this.BuildingArticles();
  }

}
