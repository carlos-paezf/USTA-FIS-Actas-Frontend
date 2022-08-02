import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { 
                path: 'login', 
                component: LoginComponent, 
                pathMatch: 'full', 
                data: { 
                    title: 'Inicio de Sesión' 
                } 
            },
            { 
                path: 'register', 
                component: RegisterComponent, 
                pathMatch: 'full', 
                data: { 
                    title: 'Solicitud de Registro' 
                } 
            },
            { 
                path: '', 
                redirectTo: 'login', 
                pathMatch: 'full' 
            },
            { 
                path: '**', 
                component: NotFoundComponent, 
                data: { 
                    title: 'No encontrado' 
                } 
            },
        ]
    }
];/**
 * We subscribe to the router events and filter out the NavigationEnd event. Then we map the router
 * state to the title of the current route
 */



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
