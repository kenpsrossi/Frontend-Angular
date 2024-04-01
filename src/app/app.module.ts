// Importando os módulos necessários do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importando o módulo de roteamento da aplicação
import { AppRoutingModule } from './app-routing.module';

// Importando o componente principal da aplicação
import { AppComponent } from './app.component';

// Importando o módulo para animações do navegador
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importando o módulo compartilhado, que provavelmente contém componentes, serviços e outros que são compartilhados em toda a aplicação
import { SharedModule } from './shared/shared.module';

// Importando os componentes de cada uma das views da aplicação
import { CadastrosAnimaisComponent } from './views/cadastros-animais/cadastros-animais.component';
import { CadastrosAdotantesComponent } from './views/cadastros-adotantes/cadastros-adotantes.component';
import { ResgatesComponent } from './views/resgates/resgates.component';
import { AjudarComponent } from './views/ajudar/ajudar.component';
import { AdotarComponent } from './views/adotar/adotar.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { AnimaisComponent } from './components/animais/animais.component';



// Definindo o módulo da aplicação
@NgModule({
  declarations: [
    // Declarando os componentes que serão usados neste módulo
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
    
  ],
  imports: [
    // Importando outros módulos que este módulo depende
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    // Aqui você pode listar os serviços que serão injetados
  ],
  bootstrap: [
    // O componente que será inicializado quando a aplicação for iniciada
    AppComponent
  ]
})
// Exportando a classe do módulo
export class AppModule { }