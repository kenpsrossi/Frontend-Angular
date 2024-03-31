import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { AdotarComponent } from './views/adotar/adotar.component';
import { AjudarComponent } from './views/ajudar/ajudar.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'menu',
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'todos', component: MenuComponent
  },
  {
    path: 'dogs', component: MenuComponent
  },
  {
    path: 'cats', component: MenuComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'adotar', component: AdotarComponent
  },
  {
    path: 'ajudar', component: AjudarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
