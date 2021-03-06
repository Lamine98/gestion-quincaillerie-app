import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article/article';
import { AuthService, User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  UserProfile: User;
  CurrentDepense: Article;
  NombreCategorie: any;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      
      this.authService.getNombreCategorie().subscribe((data:any) => {
        this.NombreCategorie = data
        console.log(this.NombreCategorie)
      })



  }
  ngOnInit(): void {
  }

}
