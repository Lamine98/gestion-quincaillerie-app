import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article/article';
import { Categorie } from '../categorie/categorie';

// User interfacedepense
export class User {
  prenom: String;
  email: String;
  password: String;
  password_confirmation: String
  role: string;
  etat: Boolean
}

export enum Role {
  Gerant = 'gerant',
  Admin = 'admin'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }

   // User registration
   register(user: User): Observable<any> {
    return this.http.post('https://api-quincaillerie.herokuapp.com/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('https://api-quincaillerie.herokuapp.com/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/user-profile');
  }

  // Access current article
  allArticle(): Observable<any> {
    return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/articles');
  }

  // add new article
  addArticle(article: Article): Observable<any> {
    return this.http.post('https://api-quincaillerie.herokuapp.com/api/auth/articles', article);
  }

  // Access current value
  getValeurStock(): Observable<any> {
    return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/valeurTotalStock');
  }

    // Access current categorie
    getAllCategorie(): Observable<any> {
      return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/categories');
    }

    nbArticle(): Observable<any> {
      return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/nbArticles')
    }

    AddCategorie(categorie: Categorie): Observable<any> {
      return this.http.post('https://api-quincaillerie.herokuapp.com/api/auth/categories', categorie);
    }

    getNombreCategorie(): Observable<any> {
      return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/getNombreCategorie');
    }

    getNombreFournisseur(): Observable<any> {
      return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/nbFournisseur');
    }

    getAllUser(): Observable<any> {
      return this.http.get('https://api-quincaillerie.herokuapp.com/api/auth/user-list');
    }

    supprimerCategorie(categorie: Categorie): Observable<any> {
      return this.http.delete(`https://api-quincaillerie.herokuapp.com/api/auth/categories/${categorie.id}`);
    }

    updateCategorie(cat:Categorie,categorie: Categorie): Observable<any> {
      return this.http.put('https://api-quincaillerie.herokuapp.com/api/auth/categories/'+cat.id, categorie);
    }

    updateArticle(art: Article, article: Article) {
      return this.http.put('https://api-quincaillerie.herokuapp.com/api/auth/articles/'+art.id, article);
    }
    supprimerArticle(article: Article): Observable<any> {
      return this.http.delete(`https://api-quincaillerie.herokuapp.com/api/auth/articles/${article.id}`);
    }

}
