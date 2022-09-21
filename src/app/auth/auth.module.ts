import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { InternalServerErrorAuthComponent } from './components/internal-server-error-auth/internal-server-error-auth.component';


@NgModule({
    declarations: [
        LoginComponent,
        MainComponent,
        RegisterComponent,
        HeaderComponent,
        InternalServerErrorAuthComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
