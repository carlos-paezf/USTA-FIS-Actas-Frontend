import { Component } from '@angular/core';


@Component({
    selector: 'app-internal-server-error-auth',
    templateUrl: './internal-server-error-auth.component.html',
    styleUrls: [ './internal-server-error-auth.component.scss' ]
})
export class InternalServerErrorAuthComponent {

    /**
     * The function refreshes the page
     */
    public refresh() {
        window.location.reload()
    }
}
