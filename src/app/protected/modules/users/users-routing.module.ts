import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUsersComponent } from './pages/form-users/form-users.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { MainComponent } from './pages/main/main.component';


const MODULE_NAME = `users`

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: `list`,
                component: ListUsersComponent,
                pathMatch: `full`,
                data: {
                    title: `Listado de Usuarios`,
                    module: MODULE_NAME,
                    permission: `read`
                }
            },
            {
                path: `create`,
                component: FormUsersComponent,
                pathMatch: `full`,
                data: {
                    title: `Creación de Usuario`,
                    module: MODULE_NAME,
                    permission: `create`
                }
            },
            {
                path: `edit/:id`,
                component: FormUsersComponent,
                pathMatch: `full`,
                data: {
                    title: `Edición de Usuario`,
                    module: MODULE_NAME,
                    permission: `edit`
                }
            }
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UsersRoutingModule { }
