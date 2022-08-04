import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './http-interceptors/error-handling.interceptor';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
    declarations: [
        LoginComponent,
        MainComponent,
        RegisterComponent,
        NotFoundComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        AuthRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlingInterceptor,
            multi: true
        }
    ]
})
export class AuthModule { }
