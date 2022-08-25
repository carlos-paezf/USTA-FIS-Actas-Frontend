import { Component } from '@angular/core';


@Component({
    selector: 'app-internal-server-error',
    templateUrl: './internal-server-error.component.html',
    styleUrls: ['./internal-server-error.component.scss']
})
export class InternalServerErrorComponent {

    /**
     * The function refreshes the page
     */
    public refresh() {
        window.location.reload()
    }
}
