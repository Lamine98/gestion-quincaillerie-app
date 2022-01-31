import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Article } from '../article';
import Swal from 'sweetalert2';

class User {
  name:String;
  email:String
  }
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})

export class ArticleViewComponent implements OnInit {
  article: Article;
  registerForm: FormGroup;
  errors = null;
  UserProfile: User;
  categories: any;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router,public fb: FormBuilder
    ) {
      this.registerForm = this.fb.group({
        prix: [0],
        intitule: [''],
        categorie_id: [0],
        quantite: [0],
        photo: ['']
      })
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getAllCategorie().subscribe((data:any) => {
        this.categories = data
        console.log(this.categories)
      })

  }

  ngOnInit(): void {
  }



  onSubmit() {
    this.authService.addArticle(this.registerForm.value).subscribe(
      result => {
        console.log(result)
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
    Swal.fire("article ajouté", "Continuer !", "success");
    }

}
