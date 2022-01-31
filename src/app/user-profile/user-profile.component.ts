import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

class User {
  prenom:String;
  nom:String;
  email:String;
  role:String
}

class Depense {
  montant:String
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  UserProfile: User;
  NombreCategorie: any;

  
  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
        console.log(this.UserProfile)
      })
      this.authService.getNombreCategorie().subscribe((data:any) => {
        this.NombreCategorie = data
        console.log(this.NombreCategorie)
      })


  }


  ngOnInit() {
  }



}
