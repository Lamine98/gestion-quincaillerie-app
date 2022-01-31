import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  registerForm: FormGroup;
  errors = null;
  UserProfile: User;
  users: any;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router,public fb: FormBuilder
    ) {
      this.registerForm = this.fb.group({
        montant: [0],
        type_revenu_id: [''],
        categorie_id: [0]
      })
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getAllUser().subscribe((data:any) => {
        this.users = data;
      })


  }

  ngOnInit(): void {
  }



  onSubmit() {
    // // this.authService.AddRevenu(this.registerForm.value).subscribe(
    // //   result => {
    // //     console.log(result)
    // //     this.simpleAlert()
    // //   },
    // //   error => {
    // //     this.errors = error.error;
    // //   },
    // //   () => {
    // //     this.registerForm.reset()
    // //   }
    // )
  }

  simpleAlert(){
    Swal.fire("Utilisateur ajouté", "Continuer !", "success");
    }



}
