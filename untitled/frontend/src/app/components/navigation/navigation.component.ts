import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  faPlus = faPlus;
  faSignOutAlt = faSignOutAlt;
  username: Pick<User, 'username'> ;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.username;
    this.authService.isUserLoggedIn$.subscribe((isLogggedIn) => {
      this.isAuthenticated = isLogggedIn;
    });
   
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(['']);
  }

  create(): void {
    this.router.navigate(['create-post']);
  }
}
