import { NgModule } from "@angular/core";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({ 
    imports: [],
    exports: [
        CarouselModule,
        BrowserAnimationsModule,
        CollapseModule
    ]
    })
export class SharedModule {}

