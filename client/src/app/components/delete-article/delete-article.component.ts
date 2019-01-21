import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ManagementService } from '../../services/management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {


  article;
  currentUrl;
  views;
  id;
  messageClass;
  message;
  hideModal;
  spinnerClass;
  spinnerMessage;

  constructor(
        private activatedRoute: ActivatedRoute,
        public authService: AuthService,
        private managementService: ManagementService,
        private articleService: ArticleService,
        private location: Location
  ) { }

  getArticle() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    this.articleService.getArticle(this.currentUrl._id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.hideModal = true;
      } else {
        this.article = data.article;
      }

      console.log(data);
    });
  }

  deleteArticle() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    this.managementService.deleteArticle(this.currentUrl._id).subscribe(data => {
      if (!data.success) {
           this.messageClass = 'alert alert-danger';
           this.message = data.message;
         } else {
           this.messageClass = 'alert alert-success';
           this.message = data.message;
           this.spinnerClass = 'spinner-border';
           this.spinnerMessage = 'Redirecting..';
           setTimeout(()=>{
             this.location.back(); // <-- go back to previous location on cancel
           }, 2000);
         }
    });
  }

  cancelDeleting() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
    this.getArticle();
  }

}
