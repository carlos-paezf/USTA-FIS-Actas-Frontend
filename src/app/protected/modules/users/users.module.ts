import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { FormUsersComponent } from './pages/form-users/form-users.component';


@NgModule({
  declarations: [
    MainComponent,
    ListUsersComponent,
    FormUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
