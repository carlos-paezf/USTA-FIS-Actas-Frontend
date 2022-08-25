import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
        data: {
            title: 'Inicio'
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
