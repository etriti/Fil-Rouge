import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RoleGuardService } from '../../guards/role-guard.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' });
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }

}
