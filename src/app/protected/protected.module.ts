import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MaterialDesignModule } from './material-design/material-design.module';

import { AccessTokenInterceptor } from './http-interceptor/access-token.interceptor';

import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputAutocompleteComponent } from './components/input-autocomplete/input-autocomplete.component';

import { SidebarToggleDirective } from './directives/sidebar-toggle.directive';
import { InputAutocompleteDirective } from './directives/input-autocomplete.directive';
import { NavItemListDirective } from './directives/nav-item-list.directive';
import { SearchIconSidebarDirective } from './directives/search-icon-sidebar.directive';
import { ValidateModulePermissionItemDirective } from './directives/validate-module-permission-item.directive';
import { UserButtonSidebarDirective } from './directives/user-button-sidebar.directive';


@NgModule({
    declarations: [
        MainComponent,
        NotFoundComponent,
        UnauthorizedComponent,
        SidebarComponent,
        ForbiddenComponent,
        NavbarComponent,
        InputAutocompleteComponent,
        SidebarToggleDirective,
        InputAutocompleteDirective,
        NavItemListDirective,
        SearchIconSidebarDirective,
        ValidateModulePermissionItemDirective,
        UserButtonSidebarDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProtectedRoutingModule,
        MaterialDesignModule,
        PrimeNgModule,
        SharedModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AccessTokenInterceptor,
            multi: true
        }
    ]
})
export class ProtectedModule { }
