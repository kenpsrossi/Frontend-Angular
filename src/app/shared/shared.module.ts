import { NgModule } from "@angular/core";
// Importa o módulo Carousel do ngx-bootstrap para fornecer um componente de carrossel
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Importa o módulo BrowserAnimationsModule para habilitar animações no aplicativo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importa o módulo Collapse do ngx-bootstrap para fornecer um componente de colapso (por exemplo, para um menu de navegação)
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Importa o módulo FormsModule para fornecer suporte para formulários e vinculação de dados bidirecional
import { FormsModule } from "@angular/forms";


// Define um módulo que agrupa e compartilha componentes comuns
@NgModule({ 
    imports: [], // Nenhum módulo é importado aqui, pois este é um módulo de compartilhamento
    exports: [
        // Os módulos importados são exportados para que possam ser importados de uma só vez por outros módulos
        CarouselModule,
        BrowserAnimationsModule,
        CollapseModule,
        FormsModule
    ]
})
export class SharedModule {} // Exporta a classe SharedModule para que possa ser importada por outros módulos