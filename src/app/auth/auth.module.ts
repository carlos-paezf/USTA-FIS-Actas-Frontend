import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
    declarations: [
        LoginComponent,
        MainComponent,
        RegisterComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
