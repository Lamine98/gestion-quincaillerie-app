import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  UserProfile: User;
  Total : any;
  NombreCategorie:any;
  NombreArticle:any
  fournisseurs:any

  
  constructor(public authService: AuthService, private auth: AuthStateService, public tokenService: TokenService, public router: Router) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
      console.log(this.UserProfile)
    })
    this.authService.getValeurStock().subscribe((data:any) => {
      this.Total = data
      console.log(this.Total)
    })
    this.authService.getNombreCategorie().subscribe((data:any) => {
      this.NombreCategorie = data
      console.log(this.NombreCategorie)
    })

    this.authService.getNombreFournisseur().subscribe((data:any) => {
      this.fournisseurs = data
    })
    this.authService.nbArticle().subscribe((data:any) => {
      this.NombreArticle = data
      console.log(this.NombreCategorie)
    })
    


}
  ngOnInit(): void {
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }

}
