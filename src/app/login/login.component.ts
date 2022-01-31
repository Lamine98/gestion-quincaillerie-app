import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService, User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;
  user: User;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      result => {
        console.log(this.responseHandler(result))
        this.user = result

        if (this.user.role == "comptable") {
          this.router.navigate(['profile']);
        }
        else {
          this.router.navigate(['admin-home']);
        }
      },
      error => {
        this.errors = error.error;
      }, () => {
        this.authState.setAuthState(true);
        this.loginForm.reset()
      }
    );
  }

  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }


}
