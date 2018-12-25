import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  firstname;
  lastname;
  email;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAccount().subscribe(account => {
        this.firstname = account.user.firstname;
        this.lastname = account.user.lastname;
        this.email = account.user.email;
    });
  }

}
