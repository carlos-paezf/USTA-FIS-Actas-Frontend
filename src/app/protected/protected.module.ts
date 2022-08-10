import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccessTokenInterceptor } from './http-interceptor/access-token.interceptor';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';


@NgModule({
    declarations: [
        MainComponent,
        NotFoundComponent,
        UnauthorizedComponent,
        SidebarComponent,
        ForbiddenComponent
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule,
        SharedModule
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
