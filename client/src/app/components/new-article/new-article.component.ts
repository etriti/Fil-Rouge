import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;
  email;
  firstname;
  lastname;


  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private managementService: ManagementService,
    private router: Router
  ) {
  this.createNewArticleForm()
  }

  createNewArticleForm()  {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      img: ["", Validators.required],
      description: ["", Validators.required],
      content: ["", Validators.required],
      price: ["", Validators.required],
      category: ["", Validators.required]
    }, { });
  }

  disableArticleForm() {
    this.form.controls['title'].disable();
    this.form.controls['img'].disable();
    this.form.controls['description'].disable();
    this.form.controls['content'].disable();
    this.form.controls['price'].disable();
    this.form.controls['category'].disable();
  }

  enableArticleForm() {
    this.form.controls['title'].enable();
    this.form.controls['img'].enable();
    this.form.controls['description'].enable();
    this.form.controls['content'].enable();
    this.form.controls['price'].enable();
    this.form.controls['category'].enable();
  }

  onArticleSubmit() {
    this.processing = true;
    this.disableArticleForm();
    const article = {
      title: this.form.get('title').value,
      img: this.form.get('img').value,
      description: this.form.get('description').value,
      content: this.form.get('content').value,
      price: this.form.get('price').value,
      category: this.form.get('category').value
    }
    this.managementService.registerArticle(article).subscribe(data => {
      console.log(data);
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableArticleForm();
      } else {
        this.disableArticleForm();
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/dashboard/all-articles']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
    this.authService.getAccount().subscribe(account => {
        // this.firstname = account.user.firstname;
        // this.lastname = account.user.lastname;
    });
  }

}
