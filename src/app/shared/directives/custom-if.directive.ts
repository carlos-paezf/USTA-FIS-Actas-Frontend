import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


/** 
 * If the condition is true, create the embedded view, otherwise clear the view container 
 * 
 * @author Carlos Páez
 */
@Directive({
    selector: '[custom-If]'
})
export class CustomIfDirective {

    constructor(
        private _templateRef: TemplateRef<HTMLElement>,
        private _viewContainer: ViewContainerRef
    ) { }

    /**
     * A setter that is called when the value of the customIf input is changed. 
     * If the condition is true, create the embedded view, otherwise clear the view container
     * @param {boolean} condition - boolean - The condition to evaluate as the condition for which View
     * to display.
     */
    @Input() set customIf(condition: boolean) {
        (condition)
            ? this._viewContainer.createEmbeddedView(this._templateRef)
            : this._viewContainer.clear()
    }
}
