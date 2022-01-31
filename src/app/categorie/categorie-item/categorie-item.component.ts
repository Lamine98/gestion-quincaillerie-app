import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.css']
})
export class CategorieItemComponent implements OnInit {
  registerForm: FormGroup;
  errors = null;
  UserProfile: User;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router,public fb: FormBuilder
    ) {
      this.registerForm = this.fb.group({
        intitule: ['']
      })
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })


  }

  ngOnInit(): void {
  }



  onSubmit() {
    this.authService.AddCategorie(this.registerForm.value).subscribe(
      result => {
        //console.log(result)
        this.simpleAlert()
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset()
      }
    )
  }

  simpleAlert(){
    Swal.fire("Catégorie ajouté", "Continuer !", "success");
    }

}
