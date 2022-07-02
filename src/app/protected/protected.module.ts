import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
    declarations: [
        MainComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule
    ]
})
export class ProtectedModule { }
