import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './shared/auth-state.service';
import { AuthService, Role, User } from './shared/auth.service';
import { TokenService } from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestion-stock';

  isSignedIn: boolean;
  UserProfile: User;


  constructor(
    private auth: AuthStateService,
    private authService: AuthService,
    public router: Router,
    public token: TokenService,
  ) {

      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      

  }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
  }
  get isAdmin() {
    return this.UserProfile && this.UserProfile.role === Role.Admin;
}

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

}
