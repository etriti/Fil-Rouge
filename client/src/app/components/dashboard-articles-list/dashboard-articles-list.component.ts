import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-dashboard-articles-list',
  templateUrl: './dashboard-articles-list.component.html',
  styleUrls: ['./dashboard-articles-list.component.css']
})
export class DashboardArticlesListComponent implements OnInit {

  articles;
  propertyName;
  reverse;
  sortBy;

  constructor(
    private managementService: ManagementService,
    private authService: AuthService
  ) { }

  getAllArticles() {
    this.managementService.getAllArticles().subscribe(data => {
      console.log(data.articles.length);
      this.articles = data.articles;
    });
  }

  ngOnInit() {
    this.getAllArticles();
 };

}
