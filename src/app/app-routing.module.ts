// Importa o módulo do Angular
import { NgModule } from '@angular/core';
// Importa o módulo de roteamento do Angular
import { RouterModule, Routes } from '@angular/router';

// Importa os componentes que serão usados nas rotas
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { AjudarComponent } from './views/ajudar/ajudar.component';
import { CadastrosAnimaisComponent } from './views/cadastros-animais/cadastros-animais.component';
import { CadastrosAdotantesComponent } from './views/cadastros-adotantes/cadastros-adotantes.component';
import { ListaAnimaisComponent } from './components/lista-animais/lista-animais.component';

// Define as rotas da aplicação
const routes: Routes = [
  // Rota padrão que redireciona para o menu
  {
    path: '', pathMatch: 'full', redirectTo: 'menu',
  },
  // Rota para o menu
  {
    path: 'menu', component: MenuComponent
  },
  // Outras rotas
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
    path: 'adotar', component: CadastrosAdotantesComponent
  },
  {
    path: 'ajudar', component: AjudarComponent
  },
  {
    path: 'cadastros-animais', component: CadastrosAnimaisComponent
  },
  {
    path: 'cadastros-adotantes', component: CadastrosAdotantesComponent
  },
  {
    path: 'lista-animais', component: ListaAnimaisComponent
  },
];

// Define o módulo de roteamento
@NgModule({
  // Importa o módulo de roteamento com as rotas definidas
  imports: [RouterModule.forRoot(routes)],
  // Exporta o módulo de roteamento para que possa ser usado em outros módulos
  exports: [RouterModule]
})
// Define a classe do módulo de roteamento
export class AppRoutingModule { }