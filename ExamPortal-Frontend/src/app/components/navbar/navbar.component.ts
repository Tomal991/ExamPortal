import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LoginService } from './../../services/login.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user: any;
  isNormal: any;
  isAdmin: any;
  constructor(
    public loginService: LoginService,
    private observer: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    });
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }
}
// if (this.loginService.getUserRole() == 'admin') {
//   this.isAdmin = true;
// }
// if (this.loginService.getUserRole() == 'normal') {
//   this.isNormal = true;
// }
