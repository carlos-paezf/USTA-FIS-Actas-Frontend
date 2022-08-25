import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

import { InternalServerErrorService } from 'src/app/shared/services';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements AfterViewInit {

    public internalServerError: boolean

    constructor(private readonly _internalError: InternalServerErrorService) {
        this.internalServerError = false
    }

    /**
     * The function subscribes to the internalServerErrorEmitter, which is an observable, and when the
     * observable emits a value, the function sets the internalServerError property to the value
     * emitted by the observable
     */
    ngAfterViewInit(): void {
        this._internalError.internalServerErrorEmitter.subscribe(error => {
            this.internalServerError = error
        })
    }
}
