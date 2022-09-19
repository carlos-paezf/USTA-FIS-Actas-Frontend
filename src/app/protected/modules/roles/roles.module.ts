import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { AdminRolesComponent } from './pages/admin-roles/admin-roles.component';


@NgModule({
    declarations: [
    AdminRolesComponent
  ],
    imports: [
        CommonModule,
        RolesRoutingModule
    ]
})
export class RolesModule { }
