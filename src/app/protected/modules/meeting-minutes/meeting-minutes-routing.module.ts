import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    /* {
        path: '',
        // component: 
        children: [
            {
                path: `/create`,
                // component:
                pathMatch: `full`,
                data: {
                    title: `Creación de Acta de Reunión`,
                    module: `meeting-minutes`,
                    permission: `create`
                }
            },
            {
                path: `/edit`,
                pathMatch: `full`,
                data: {
                    title: `Edición de Acta de Reunión`,
                    module: `meeting-minutes`,
                    permission: `edit`
                }
            }
        ]
    } */
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeetingMinutesRoutingModule { }
