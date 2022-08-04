import { Component } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public items = [
        {
            label: 'Iniciar Sesión',
            routerLink: '/auth/login'
        },
        {
            label: 'Solicitar Ingreso',
            routerLink: '/auth/register'
        }
    ]
}
