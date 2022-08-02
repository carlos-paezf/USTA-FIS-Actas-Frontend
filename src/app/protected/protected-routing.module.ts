import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'meeting-minutes',
                loadChildren: () => import('./modules/meeting-minutes/meeting-minutes.module').then(m => m.MeetingMinutesModule)
            },
            {
                path: 'roles',
                loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', component: NotFoundComponent, data: { title: 'No encontrado =(' } }
        ]
    },
    {
        path: '**', component: NotFoundComponent, data: { title: 'No encontrado =(' }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProtectedRoutingModule { }
