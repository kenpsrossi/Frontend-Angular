// Importa os módulos necessários do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa o módulo de roteamento da aplicação
import { AppRoutingModule } from './app-routing.module';

// Importa o componente principal da aplicação
import { AppComponent } from './app.component';

// Importa o módulo para animações do navegador
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa o módulo compartilhado, que contém componentes, serviços e outros que são compartilhados em toda a aplicação
import { SharedModule } from './shared/shared.module';

// Importa os componentes de cada uma das views da aplicação
import { CadastrosAnimaisComponent } from './views/cadastros-animais/cadastros-animais.component';
import { CadastrosAdotantesComponent } from './views/cadastros-adotantes/cadastros-adotantes.component';
import { ResgatesComponent } from './views/resgates/resgates.component';
import { AjudarComponent } from './views/ajudar/ajudar.component';
import { AdotarComponent } from './views/adotar/adotar.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { FormsModule } from '@angular/forms';
import { ListaAnimaisComponent } from './components/lista-animais/lista-animais.component';

// Define o módulo da aplicação
@NgModule({
  // Declara os componentes que serão usados neste módulo
  declarations: [
    AppComponent,
    CadastrosAnimaisComponent,
    CadastrosAdotantesComponent,
    ResgatesComponent,
    AjudarComponent,
    AdotarComponent,
    LoginComponent,
    MenuComponent,
    CarouselComponent,
    AnimaisComponent,
    ListaAnimaisComponent,
  ],
  // Importa outros módulos que este módulo depende
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  // Lista os serviços que serão injetados
  providers: [],
  // O componente que será inicializado quando a aplicação for iniciada
  bootstrap: [AppComponent]
})
// Exporta a classe do módulo
export class AppModule { }