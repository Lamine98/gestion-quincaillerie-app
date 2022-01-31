import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import Swal from 'sweetalert2';
import { Article } from '../article';


@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  datas : any;
  UserProfile: User;
  imageDirectoryPath:any = 'https://api-quincaillerie.herokuapp.com/storage/';
  art: Article;
  registerForm: FormGroup;

  // @Input() article: article;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.allArticle().subscribe((data:any) => {
        this.datas = data
        console.log(this.datas)
      })
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'intitule': new FormControl(),

  });
  }

  supprimerArticle(article: Article) {
    this.authService.supprimerArticle(article)
      .subscribe(() => {
        var pos = this.datas.indexOf(article);
        if(pos>-1) {
          this.datas.splice(pos,1);
        }
      }, (err) => {
        console.log(err);
      })
  }

  showArticle(article: Article){
    this.art = article

  }
  updateArticle(art: Article) {
    this.authService.updateArticle(art, this.registerForm.value)
      .subscribe(result  => {
        this.simpleAlert()
      }, (err) => {
        console.log(err);
      })
  }

  simpleAlert(){
    Swal.fire("Article modifié", "Continuer !", "success");
    }

}
