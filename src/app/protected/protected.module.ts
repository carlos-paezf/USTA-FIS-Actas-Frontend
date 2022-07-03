import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccessTokenInterceptor } from './http-interceptor/access-token.interceptor';


@NgModule({
    declarations: [
        MainComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AccessTokenInterceptor,
            multi: true
        }
    ]
})
export class ProtectedModule { }
