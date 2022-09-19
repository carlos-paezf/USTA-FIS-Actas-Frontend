import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMeetingMinutesComponent } from './pages/form-meeting-minutes/form.component';
import { ListMeetingMinutesComponent } from './pages/list-meeting-minutes/list.component';
import { MainComponent } from './pages/main/main.component';


const MODULE_NAME = `meeting-minutes`


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: `list`,
                component: ListMeetingMinutesComponent,
                pathMatch: `full`,
                data: {
                    title: `Listado de Actas de Reunión`,
                    module: MODULE_NAME,
                    permission: `read`
                }
            },
            {
                path: `create`,
                component: FormMeetingMinutesComponent,
                pathMatch: `full`,
                data: {
                    title: `Creación de Acta de Reunión`,
                    module: MODULE_NAME,
                    permission: `create`
                }
            },
            {
                path: `edit/:id`,
                component: FormMeetingMinutesComponent,
                pathMatch: `full`,
                data: {
                    title: `Edición de Acta de Reunión`,
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
export class MeetingMinutesRoutingModule { }
