import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CategorieViewComponent } from './categorie/categorie-view/categorie-view.component';
import { CategorieItemComponent } from './categorie/categorie-item/categorie-item.component';
import { PersonnalComponent } from './personnal/personnal.component';
import { AdminHomeComponent } from './administration/admin-home/admin-home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
    ArticleViewComponent,
    ArticleItemComponent,
    NavBarComponent,
    DashboardComponent,
    HeaderComponent,
    UtilisateurComponent,
    CategorieViewComponent,
    CategorieItemComponent,
    PersonnalComponent,
    AdminHomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
