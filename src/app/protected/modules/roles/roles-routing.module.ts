import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRolesComponent } from './pages/admin-roles/admin-roles.component';


const routes: Routes = [
    {
        path: '',
        component: AdminRolesComponent,
        pathMatch: `full`,
        data: {
            title: `Administración de roles`,
            module: `roles`,
            permission: `read`
        }
    }
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RolesRoutingModule { }
