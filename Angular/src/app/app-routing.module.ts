import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './service/auth.guard';
import {LogoutComponent} from './logout/logout.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UpdateComponent} from './update/update.component';
import {AdminComponent} from './admin/admin.component';
import {VoitureComponent} from './voiture/voiture.component';
import {CoffeeComponent} from './coffee/coffee.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'coffee', component: CoffeeComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
