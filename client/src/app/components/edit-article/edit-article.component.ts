import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ManagementService } from '../../services/management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

article;
message;
messageClass;
processing = false;
currentUrl;
loading = true;
spinnerClass;
spinnerMessage;

  constructor(
    private managementService: ManagementService,
    private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    // this.createUpdateArticleForm()
  }


  // createUpdateArticleForm()  {
  //   this.form = this.formBuilder.group({
  //     title: [],
  //     img: [],
  //     description: [],
  //     content: [],
  //     price: [],
  //     category: []
  //   }, { });
  // }

  // disableArticleForm() {
  //   this.form.controls['title'].disable();
  //   this.form.controls['img'].disable();
  //   this.form.controls['description'].disable();
  //   this.form.controls['content'].disable();
  //   this.form.controls['price'].disable();
  //   this.form.controls['category'].disable();
  // }
  //
  // enableArticleForm() {
  //   this.form.controls['title'].enable();
  //   this.form.controls['img'].enable();
  //   this.form.controls['description'].enable();
  //   this.form.controls['content'].enable();
  //   this.form.controls['price'].enable();
  //   this.form.controls['category'].enable();
  // }

  updateArticleSubmit() {
    this.processing = true;
    // this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // this.processing = true;
    // // this.disableArticleForm();
    // const article = {
    //   title: this.form.get('title').value,
    //   img: this.form.get('img').value,
    //   description: this.form.get('description').value,
    //   content: this.form.get('content').value,
    //   price: this.form.get('price').value,
    //   category: this.form.get('category').value
    // }
    this.managementService.editArticle(this.article).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.spinnerClass = 'spinner-border';
        this.spinnerMessage = 'Redirecting..';
        setTimeout(() => {
          this.location.back(); // <-- go back to previous location on cancel
        }, 2000);
      }
    });
  }

  cancelEditing() {
      this.location.back(); // <-- go back to previous location on cancel
  }


  Article() {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    this.articleService.getArticle(this.currentUrl._id).subscribe(data => {
      console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.article = data.article;
        this.loading = false;
      }
    });
  }

  ngOnInit() {
   this.Article();
  }

}
