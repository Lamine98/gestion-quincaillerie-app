import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './administration/admin-home/admin-home.component';
import { CategorieItemComponent } from './categorie/categorie-item/categorie-item.component';
import { CategorieViewComponent } from './categorie/categorie-view/categorie-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PersonnalComponent } from './personnal/personnal.component';
import { RegisterComponent } from './register/register.component';
import { Role } from './shared/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './_helpers/auth.guard';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'profile', component: UserProfileComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'add-article', component: ArticleViewComponent},
  {path : 'article', component: ArticleItemComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'header', component: HeaderComponent},
  {path : 'mes-revenus', component: HeaderComponent},
  {path : 'utilisateurs', component: UtilisateurComponent},
  {path : 'categories', component: CategorieViewComponent},
  {path : 'add-categorie', component: CategorieItemComponent},
  {path : 'mes-infos', component: PersonnalComponent},
  {path : 'admin-home', component: AdminHomeComponent},
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: { role: [Role.Admin] }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
