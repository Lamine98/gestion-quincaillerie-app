import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import Swal from 'sweetalert2';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {

  UserProfile: User;
  Categories: any;
  categorie: Categorie;
  registerForm: FormGroup;

  cat: Categorie

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router
    ) {

      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getAllCategorie().subscribe((data:any) => {
        this.Categories = data;
      })
    
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'intitule': new FormControl(),
  });
  }


  supprimerCategorie(categorie: Categorie) {
    this.authService.supprimerCategorie(categorie)
      .subscribe(() => {
        var pos = this.Categories.indexOf(categorie);
        if(pos>-1) {
          this.Categories.splice(pos,1);
        }
      }, (err) => {
        console.log(err);
      })
  }

  showCategorie(categorie: Categorie){
    this.cat = categorie

  }
  updateCategorie(cat: Categorie) {
    this.authService.updateCategorie(cat, this.registerForm.value)
      .subscribe(result  => {
        this.simpleAlert()
      }, (err) => {
        console.log(err);
      })
  }

  simpleAlert(){
    Swal.fire("Catégorie modifié", "Continuer !", "success");
    }
}
