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
import { AjudarComponent } from './views/ajudar/ajudar.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdotanteFormComponent } from './adotante-form/adotante-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaAdotantesComponent } from './lista-adotantes/lista-adotantes.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AdocaoAnimaisComponent } from './components/adocao-animais/adocao-animais.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificacaoCompletoComponent } from './notificacao-completo/notificacao-completo.component';




// Define o módulo da aplicação
@NgModule({
  // Declara os componentes que serão usados neste módulo
  declarations: [
    AppComponent,
    CadastrosAnimaisComponent,
    CadastrosAdotantesComponent,
    AjudarComponent,
    LoginComponent,
    MenuComponent,
    CarouselComponent,
    AnimaisComponent,
    
   
    AdotanteFormComponent,
    ListaAdotantesComponent,
    ListaAnimaisComponent,
    AnimalFormComponent,
    AdocaoAnimaisComponent,
    NotificationComponent,
    NotificacaoCompletoComponent,
   
   
  ],
  // Importa outros módulos que este módulo depende
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  // Lista os serviços que serão injetados
  providers: [],
  // O componente que será inicializado quando a aplicação for iniciada
  bootstrap: [AppComponent]
})
// Exporta a classe do módulo
export class AppModule { }